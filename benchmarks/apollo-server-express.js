const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");

const app = express();
const schema = createApolloSchema();
const server = new ApolloServer({
  schema
});
server.applyMiddleware({ app });
app.listen(4001);
