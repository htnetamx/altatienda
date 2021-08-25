const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Upload
  input inputCreateProduct {
    doc: Upload!
    Description: String!
  }
  input inputUpdatePromotions {
    doc: Upload!
    nameAction: String!
  }
  # Queries
  extend type Query {
    getListLogCreateMassiveProducts: response
  }
  #Mutaciones
  extend type Mutation {
    createMassiveProducts(input: inputCreateProduct): response
    updateMassivePromotionsProducts(input: inputUpdatePromotions): response
  }
`;
module.exports = typeDefs;
