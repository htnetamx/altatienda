import { gql } from '@apollo/client';

export const MUTATION_TEST = gql`
  mutation createMassiveProducts($doc: Upload!, $Description : String!) {
    createMassiveProducts(input: { doc: $doc, Description: $Description }) {
      statusCode
      message
      response
      error
    }
  }
`;

export const LOAD_MASSIVE_PRODUCTS = gql`
mutation createMassiveProducts($doc: Upload!, $Description : String!) {
  createMassiveProducts(input: { doc: $doc, Description: $Description }) {
    statusCode
    message
    response
    error
  }
}
`;

export const CREATE_STORE = gql`
  mutation createStore(
    $storeName: String!
    $companyName: String!
    $companyAddress: String!
    $companyPhoneNumber: String!
  ) {
    createStore(
      input: {
        storeName: $storeName
        companyName: $companyName
        companyAddress: $companyAddress
        companyPhoneNumber: $companyPhoneNumber
      }
    ) {
      statusCode
      message
      response
      error
    }
  }
`;