const { makeExecutableSchema } = require("graphql-tools");
const md5 = require("md5");
const { data } = require("./data");
const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Category {
    id: ID!
    name: String!
    md5: String!
    products: [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    categories: [Category!]!
  }
`;

const resolvers = {
  Category: {
    md5: parent => md5(parent.name)
  },
  Query: {
    categories: () => {
      return data;
    }
  }
};

module.exports.createApolloSchema = () => {
  return makeExecutableSchema({
    typeDefs,
    resolvers
  });
};