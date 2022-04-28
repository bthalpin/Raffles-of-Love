import { gql } from '@apollo/client';

export const USER = gql`
query user {
    user {
      _id
      userName
      email
      password
      location
      tickets{
        _id
        ticketNumber
        productId{
          _id
      
          }
        }
    }
  }
`;

export const CHARITIES = gql`
query Charities {
    charities {
      _id
      name
      website
      image
      description
    }
  }
`;

export const SINGLE_CHARITY = gql`
query singleCharity($charityId: ID!) {
    charity(charityId: $charityId) {
      _id
      name
      website
      image
      description
    }
  }
`;

export const PRODUCTS = gql`
query Products {
    products {
      _id
      name
      description
      image
      price
      ticketCount
      tickets {
        _id
      }
      winningNumber
      charity {
        name
      }
    }
  }
`;

export const SINGLE_PRODUCT = gql`
query singleProduct($productId: ID!) {
    product(productId: $productId) {
      _id
      name
      description
      image
      ticketCount
      price
      tickets {
        _id
      }
      winningNumber
      charity {
        _id
        name
        website
        image
        description
      }
    }
  }
`;

export const PRODUCTS_BY_CHARITY = gql`
query ProductsCharityId($charityId: ID!) {
    productsByCharity(charityId: $charityId) {
      _id
      name
      description
      image
      price
      ticketCount
      tickets {
        _id
      }
      winningNumber
      charity {
        _id
        name
        website
        image
        description
      }
    }
  }
`;

export const TICKETS = gql`
query tickets {
    tickets {
      _id
      purchaseDate
      ticketNumber
      product {
        _id
        name
        description
        image
        price
        ticketCount
      }
    }
  }
`;

export const SINGLE_TICKET = gql`
query ticket($id: ID!) {
    ticket(_id: $id) {
      _id
      purchaseDate
      ticketNumber
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
export const QUERY_SUCCESS = gql`
  query getCheckout($sessionId: ID!) {
    success(sessionId: $sessionId) {
      session
    }
  }
`;
export const MY_PRODUCTS = gql`
  query myProducts($productId: [ID]!) {
    myProducts(productId: $productId) {
      
        name
        _id
        description
      
    }
  }
`;
