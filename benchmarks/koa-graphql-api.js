const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { errorHandler, execute } = require("graphql-api-koa");
const { graphqlUploadKoa } = require("graphql-upload");
const { createSchema } = require('../lib/createSchema');
const schema = createSchema();

const app = new Koa()
  .use(errorHandler())
  .use(graphqlUploadKoa())
  .use(bodyParser())
  .use(execute({ schema }));

app.listen(4001);
