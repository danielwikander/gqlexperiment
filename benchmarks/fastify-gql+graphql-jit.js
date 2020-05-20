const Fastify = require("fastify");
const GQL = require("fastify-gql");
const { createSchema } = require('../lib/createSchema');
const schema = createSchema();
const app = Fastify();

app.register(GQL, {
  schema,
  jit: 1
});

app.listen(4001);
