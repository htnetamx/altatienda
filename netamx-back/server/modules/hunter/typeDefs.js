const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input inputCreateStore {
    storeName: String!
    companyName: String!
    companyAddress: String!
    companyPhoneNumber: String!
    companyPhoneNumber2: String!
    tipo: String!
    hunter: String!
    placeId: String!
  }

  # Queries
  extend type Query {
    queryTest: response
  }

  # Mutations
  extend type Mutation {
    createStore (input: inputCreateStore) : response
  }
`;
module.exports = typeDefs;
