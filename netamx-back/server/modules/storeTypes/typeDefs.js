const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input inputCreateStoreType {
    Name: String!
  }

  # Queries
  extend type Query {
    getStoreTypeList: response
  }

  # Mutations
  extend type Mutation {
    createStoreType: response
  }
`;
module.exports = typeDefs;
