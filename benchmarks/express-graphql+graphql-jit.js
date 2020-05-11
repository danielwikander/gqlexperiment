const graphqlHTTP = require("express-graphql");
const { createApolloSchema } = require("../lib/createApolloSchema");
const express = require("express");
const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const { graphqlUploadExpress } = require("graphql-upload");

const app = express();
const schema = createApolloSchema();

const cache = {};

app.use(
  "/graphql",
  graphqlUploadExpress(),
  graphqlHTTP((_, __, { query }) => {
    if (!(query in cache)) {
      const document = parse(query);
      cache[query] = compileQuery(schema, document);
    }

    return {
      schema,
      customExecuteFn: ({ rootValue, variableValues, contextValue }) =>
        cache[query].query(rootValue, contextValue, variableValues)
    };
  })
);
app.listen(4001);
