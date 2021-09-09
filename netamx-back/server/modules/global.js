const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type response {
    statusCode: Int
    message: String
    error: String
    response: String
  }
  type responseMasive {
    statusCode: Int
    errorDocument : String
    errorDetail : String
  }
`;
module.exports = typeDefs