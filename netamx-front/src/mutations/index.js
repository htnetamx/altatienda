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
    $hunter: String!
    $placeId: String!
  ) {
    createStore(
      input: {
        storeName: $storeName
        companyName: $companyName
        companyAddress: $companyAddress
        companyPhoneNumber: $companyPhoneNumber
        hunter: $hunter
        placeId: $placeId
      }
    ) {
      statusCode
      message
      response
      error
    }
  }
`;

export const LOGIN = gql`
  mutation login($nameUser: String!, $password: String!) {
    login(input: { nameUser: $nameUser, password: $password }) {
      statusCode
      message
      response
      error
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout {
      statusCode
      message
      response
      error
    }
  }
`;

export const LOAD_MASSIVE_STATUS_BY_SKU = gql`
mutation updateMassiveChangeStatusSku($doc: Upload!, $Description : String!) {
  updateMassiveChangeStatusSku(input: { doc: $doc, Description: $Description }) {
    statusCode
    message
    response
    error
  }
}
`;

export const LOAD_MASSIVE_PROCUREMENT = gql`
mutation createProcurement($doc: Upload!, $Description : String!) {
  createProcurement(input: { doc: $doc, Description: $Description }) {
    statusCode
    message
    response
    error
  }
}
`;