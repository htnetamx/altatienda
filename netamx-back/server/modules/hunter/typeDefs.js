const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input inputCreateHunter {
    Name: String!
    PhoneNumber: String!
    Address: String!
  }

  # Queries
  extend type Query {
    getHuntersList: response
  }

  # Mutations
  extend type Mutation {
    createHunter: response
  }
`;
module.exports = typeDefs;
