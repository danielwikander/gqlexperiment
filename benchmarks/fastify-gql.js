const Fastify = require("fastify");
const GQL = require("fastify-gql");
const { createSchema } = require('../lib/createSchema');
const schema = createSchema();
const app = Fastify();

app.register(GQL, {
  schema
});

app.listen(4001);
