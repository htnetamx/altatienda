const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input loginInput {
    nameUser: String!
    password: String!
}
  # Queries
  
  #Mutaciones
  extend type Mutation {
    createUser: response
    login(input: loginInput): response
    logout: response
  }
`;
module.exports = typeDefs;
