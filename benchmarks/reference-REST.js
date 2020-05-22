const { createServer } = require('http');
const { data } = require("../lib/data");
const md5 = require("md5");

const server = createServer(function (req, res) {
  let payload = '';

  req.on('data', (chunk) => {
    payload += chunk.toString();
  });

  req.on('end', async () => {
    res.end(JSON.stringify(data.map(x => ({ ...x, md5: md5(x.name) }))));
  });
});

server.listen(4001);
