const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input inputCreateStore {
    storeName: String!
    companyName: String!
    companyAddress: String!
    companyPhoneNumber: String!
    companyPhoneNumber2: String!
    tipoId: Int!
    hunterId: Int!
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
