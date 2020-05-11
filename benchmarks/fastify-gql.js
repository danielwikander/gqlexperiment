const Fastify = require("fastify");
const GQL = require("fastify-gql");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const app = Fastify();

app.register(GQL, {
  schema
});

app.listen(4001);
