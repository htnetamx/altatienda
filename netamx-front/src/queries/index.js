import gql from 'graphql-tag';

export const GET_LIST_REGISTER_PRODUCTS = gql`
  query getListLogCreateMassiveProducts {
    getListLogCreateMassiveProducts {
      statusCode
      message
      error
      response
    }
  }
`;