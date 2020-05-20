const express = require("express");
const graphqlHTTP = require("express-graphql");
const { graphqlUploadExpress } = require("graphql-upload");
const { createSchema } = require('../lib/createSchema');
const schema = createSchema();
const app = express();

app.use(
  "/graphql",
  graphqlUploadExpress(),
  graphqlHTTP({
    schema
  })
);
app.listen(4001);
