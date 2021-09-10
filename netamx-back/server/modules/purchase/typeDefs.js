const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input inputCreateProcurement {
    doc: Upload!
    Description: String!
  }

  # Queries
  extend type Query {
    getListLogCreateMassivePurchase: response  
  }

  # Mutations
  extend type Mutation {
    createProcurement(input: inputCreateProcurement): response
  }
`;
module.exports = typeDefs;
