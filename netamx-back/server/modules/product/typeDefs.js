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
  input inputUpdateMassivePriceProducts {
    doc: Upload!
    Description: String!
  }
  # Queries
  extend type Query {
    getListLogCreateMassiveProducts: response
    getListLogCreateMassiveProductsPromotions: response
    getListLogCreateMassiveProductsPrice: response
  }
  #Mutaciones
  extend type Mutation {
    createMassiveProducts(input: inputCreateProduct): response
    updateMassivePromotionsProducts(input: inputUpdatePromotions): response
    updateMassivePriceProducts(input: inputUpdateMassivePriceProducts): response
  }
`;
module.exports = typeDefs;
