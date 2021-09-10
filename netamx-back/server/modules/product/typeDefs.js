const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Upload
  input inputCreateProduct {
    doc: Upload!
    Description: String!
  }
  input inputUpdatePromotions {
    doc: Upload!
    Description: String!
  }
  # Queries
  extend type Query {
    getListLogCreateMassiveProducts: response
    getListLogCreateMassiveProductsPromotions: response
  }
  #Mutaciones
  extend type Mutation {
    createMassiveProducts(input: inputCreateProduct): response
    updateMassivePromotionsProducts(input: inputUpdatePromotions): response
    updateMassivePriceProducts(doc: Upload!): response
  }
`;
module.exports = typeDefs;
