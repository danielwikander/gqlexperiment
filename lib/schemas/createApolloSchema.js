const { makeExecutableSchema } = require("graphql-tools");
const md5 = require("md5");
const { data } = require("../data");
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    md5: String!
    company: String!
    books: [Book!]!
  }

  type Book {
    id: ID!
    name: String!
    numPages: Int!
  }

  type Query {
    authors: [Author!]!
  }
`;

const resolvers = {
  Author: {
    md5: parent => md5(parent.name)
  },
  Query: {
    authors: () => {
      return data;
    }
  }
};

const asyncResolvers = {
  Author: {
    md5: parent => md5(parent.name)
  },
  Query: {
    authors: async () => {
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

module.exports.createAsyncApolloSchema = () => {
  return makeExecutableSchema({
    typeDefs,
    resolvers: asyncResolvers
  });
};
