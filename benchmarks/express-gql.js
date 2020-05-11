const bodyParser = require("body-parser");
const { createGraphqlMiddleware } = require("express-gql");
const { createApolloSchema } = require("../lib/createApolloSchema");
const express = require("express");
const { graphqlUploadExpress } = require("graphql-upload");

const schema = createApolloSchema();

const app = express();
app.post(
  "/graphql",
  graphqlUploadExpress(),
  bodyParser.json(),
  createGraphqlMiddleware({
    context: () => ({}),
    formatError: ({ error }) => error,
    schema
  })
);
app.listen(4001);
