# TL;DR

- graphql-jit helps
- apollo-server adds overhead
- tracing resolvers kills performance
- type-graphql adds overhead

# Explanation

For further details, please check out [this video](https://www.youtube.com/watch?v=JbV7MCeEPb8).

# Usage

```
git clone https://github.com/benawad/benchmarks
cd benchmarks
npm install
npm start
```

# Benchmarks
duration: 5.04s
connections: 5
pipelining: 1

| Server                                                                                                                                                                  | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                                                     | --:        | :-:     | --:           |
| [core-graphql-jit-str](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-str.js)                                               | 5973.2     | 0.30    | 36.93         |
| [core-graphql-jit-buf](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf.js)                                               | 5858.8     | 0.30    | 36.23         |
| [uWebSockets-graphql+jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit.js)                                         | 5727.6     | 0.30    | 35.20         |
| [core-graphql-jit-buf-fjs](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf-fjs.js)                                       | 5679.6     | 0.30    | 35.13         |
| [fastify-REST](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-REST.js)                                                               | 5486.8     | 0.35    | 43.88         |
| [fastify-gql+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-gql+graphql-jit.js)                                         | 5437.2     | 0.34    | 33.87         |
| [fastify-gql+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-gql+graphql-jit+type-graphql.js)               | 4573.4     | 0.45    | 28.49         |
| [express-REST](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-REST.js)                                                               | 4278.2     | 0.53    | 34.49         |
| [express-gql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-gql.js)                                                                 | 3600.2     | 0.86    | 22.65         |
| [graphql-api-koa+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-api-koa+graphql-jit.js)                                 | 2817.8     | 1.34    | 17.55         |
| [express-graphql+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit.js)                                 | 2374.2     | 1.57    | 14.94         |
| [fastify-gql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-gql.js)                                                                 | 2367.0     | 1.58    | 14.74         |
| [fastify-gql+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-gql+graphql-compose.js)                                 | 2179.0     | 1.78    | 13.58         |
| [express-graphql+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit+type-graphql.js)       | 2176.2     | 1.72    | 13.70         |
| [express-graphql+graphql-jit+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit+graphql-compose.js) | 2059.4     | 1.91    | 12.96         |
| [apollo-server-fastify+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify+graphql-jit.js)                     | 1740.6     | 2.33    | 10.88         |
| [graphql-api-koa](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-api-koa.js)                                                         | 1726.8     | 2.50    | 10.76         |
| [graphql-compose+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-compose+async.js)                                             | 1600.0     | 2.75    | 10.07         |
| [express-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql.js)                                                         | 1564.0     | 2.79    | 9.84          |
| [apollo-schema+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-schema+async.js)                                                 | 1555.8     | 2.79    | 9.79          |
| [express-graphql+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-compose.js)                         | 1488.6     | 2.97    | 9.37          |
| [express-graphql+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+type-graphql.js)                               | 1481.0     | 2.90    | 9.32          |
| [type-graphql+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+async.js)                                                   | 1455.8     | 2.93    | 9.16          |
| [type-graphql+middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+middleware.js)                                         | 1452.0     | 2.94    | 9.14          |
| [type-graphql+async-middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+async-middleware.js)                             | 1409.4     | 3.01    | 8.87          |
| [apollo-server-fastify](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify.js)                                             | 1383.6     | 3.10    | 8.64          |
| [express-graphql-dd-trace-no-plugin](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace-no-plugin.js)                   | 1311.0     | 3.28    | 8.25          |
| [apollo-server-express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express.js)                                             | 1238.6     | 3.45    | 7.83          |
| [apollo-opentracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-opentracing.js)                                                   | 913.8      | 4.92    | 5.78          |
| [yoga-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/yoga-graphql.js)                                                               | 888.2      | 5.16    | 5.57          |
| [apollo-server-express-tracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express-tracing.js)                             | 736.8      | 6.26    | 23.46         |
| [yoga-graphql-trace](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/yoga-graphql-trace.js)                                                   | 609.6      | 7.69    | 19.39         |
| [express-graphql-dd-trace-less](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace-less.js)                             | 576.4      | 8.16    | 3.63          |
| [express-graphql-dd-trace](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace.js)                                       | 529.6      | 8.95    | 3.33          |
