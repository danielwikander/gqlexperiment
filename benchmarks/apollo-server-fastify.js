const { ApolloServer } = require("apollo-server-fastify");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const app = require("fastify")();

const schema = createApolloSchema();
const server = new ApolloServer({
  schema
});
app.register(server.createHandler());
app.listen(4001);
