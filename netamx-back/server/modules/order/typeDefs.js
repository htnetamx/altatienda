const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input inputUpdateStatusSkus {
    doc: Upload!
    Description: String!
  }
  # Queries
  extend type Query {
    getListLogCreateMassiveUpdateStatusSkus: response
  }
  #Mutaciones
  extend type Mutation {
    updateMassiveChangeStatusSku(input: inputUpdateStatusSkus): response
  }
`;
module.exports = typeDefs;
