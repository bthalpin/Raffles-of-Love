import { gql } from '@apollo/client';

export const USER = gql`
query user {
    user {
      _id
      userName
      email
      password
      location
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
query singleCharity($id: ID!) {
    charity(_id: $id) {
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
      charity {
        name
      }
    }
  }
`;

export const SINGLE_PRODUCT = gql`
query singleProduct($id: ID!) {
    product(_id: $id) {
      _id
      name
      description
      image
      ticketCount
      price
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