const graphqlHTTP = require("express-graphql");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { graphqlUploadExpress } = require("graphql-upload");
const express = require("express");

const app = express();
const schema = createApolloSchema();
app.use(
  "/graphql",
  graphqlUploadExpress(),
  graphqlHTTP({
    schema
  })
);
app.listen(4001);
