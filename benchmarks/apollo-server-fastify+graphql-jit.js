const { ApolloServer } = require("apollo-server-fastify");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const app = require("fastify")();

const schema = createApolloSchema();

const cache = {};

const server = new ApolloServer({
  schema,
  executor: ({ source, context }) => {
    if (!(source in cache)) {
      const document = parse(source);
      cache[source] = compileQuery(schema, document);
    }

    return cache[source].query({}, context, {});
  }
});
app.register(server.createHandler());
app.listen(4001);
