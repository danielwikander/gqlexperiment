"use strict";

const autocannon = require("autocannon");
const fs = require("fs");
const compare = require("autocannon-compare");
const path = require("path");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

const resultsDirectory = path.join(process.cwd(), "results");

const body = JSON.stringify({
  query:
    "{\n  authors {\n    id\n    name\n    md5\n    books {\n      id\n      name\n    }\n  }\n}"
});

const run = (opts = {}) =>
  new Promise((resolve, reject) => {
    autocannon(
      {
        ...opts,
        url: "http://localhost:4001/graphql",
        method: "POST",
        body,
        headers: {
          "content-type": "application/json"
        }
      },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });

const writeResult = async (handler, result) => {
  try {
    await access(resultsDirectory);
  } catch (e) {
    await mkdir(resultsDirectory);
  }

  result.server = handler;

  const dest = path.join(resultsDirectory, `${handler}.json`);
  return writeFile(dest, JSON.stringify(result));
};

module.exports.fire = async (opts, handler, save) => {
  const result = await run(opts);
  return save ? writeResult(handler, result) : null;
};

module.exports.compare = (a, b) => {
  const resA = require(`${resultsDirectory}/${a}.json`);
  const resB = require(`${resultsDirectory}/${b}.json`);
  const comp = compare(resA, resB);
  if (comp.equal) {
    return true;
  } else if (comp.aWins) {
    return {
      diff: comp.requests.difference,
      fastest: a,
      slowest: b,
      fastestAverage: resA.requests.average,
      slowestAverage: resB.requests.average
    };
  }
  return {
    diff: compare(resB, resA).requests.difference,
    fastest: b,
    slowest: a,
    fastestAverage: resB.requests.average,
    slowestAverage: resA.requests.average
  };
};
