const { createServer } = require('http');
const { graphql } = require('graphql');
const { createSchema } = require('../lib/createSchema');
const schema = createSchema();

const server = createServer(function (req, res) {
  let payload = '';

  req.on('data', (chunk) => {
    payload += chunk.toString();
  });

  req.on('end', async () => {
    const { query } = JSON.parse(payload);
    graphql(schema, query).then((result) => {
      result = JSON.stringify(result);
      res.end(JSON.stringify(result));
    })
  });
});

server.listen(4001);
