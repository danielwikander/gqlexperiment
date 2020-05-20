const Koa = require("koa");
const { data } = require("../lib/data");
const md5 = require("md5");

const app = new Koa()
  .use((ctx) => {
    ctx.body = data.map(x => ({ ...x, md5: md5(x.name) }));
  });


app.listen(4001);
