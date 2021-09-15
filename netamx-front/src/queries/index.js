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

export const GET_LIST_SKU_STATUS = gql`
  query getListLogCreateMassiveUpdateStatusSkus {
    getListLogCreateMassiveUpdateStatusSkus {
      statusCode
      message
      error
      response
    }
  }
`;

export const GET_LIST_PROCUREMENT = gql`
  query getListLogCreateMassivePurchase {
    getListLogCreateMassivePurchase {
      statusCode
      message
      error
      response
    }
  }
`;

export const GET_LIST_PROMOTIONS = gql`
  query getListLogCreateMassiveProductsPromotions {
    getListLogCreateMassiveProductsPromotions {
      statusCode
      message
      error
      response
    }
  }
`;

export const GET_LIST_UPDATE_PRICES_PRODUCTS = gql`
  query getListLogCreateMassiveProductsPrice {
    getListLogCreateMassiveProductsPrice {
      statusCode
      message
      error
      response
    }
  }
`;

export const GET_LIST_HUNTERS = gql`
  query getHuntersList {
    getHuntersList {
      statusCode
      message
      error
      response
    }
  }
`;

export const GET_LIST_STORE_TYPES = gql`
  query getStoreTypeList {
    getStoreTypeList {
      statusCode
      message
      error
      response
    }
  }
`;
