const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Ticket {
        _id: ID
        purchaseDate: String
        ticketNumber: Int!
        product:Product
    }

    type Charity {
        _id: ID
        name: String
        website: String
        image: String
        logo: String
        description: String
        mission: String
        youtube: String
    }
    
    type Product {
        _id: ID
        name: String!
        description: String
        image: String
        price: Int!
        ticketCount: Int
        charity: Charity
        tickets:[Ticket]
        winningNumber:ID
    }

    type User {
        _id: ID
        userName: String!
        email: String!
        password: String!
        location: String!
        tickets: [Ticket]
        favCharities: [Charity]
        order: [Order]
        charity: Charity
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
      }

    type Checkout {
        session: ID
    }
    type Success {
        session:ID
    }
    
    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        charities: [Charity]
        charity(charityId: ID!): Charity
        products: [Product]
        productsByCharity(charityId: ID!): [Product]
        product(productId: ID!): Product
        myProducts(productId:[ID]!):[Product]
        tickets: [Ticket]
        ticket(_id: ID!): Ticket
        checkout(products: [ID]!): Checkout
        order(_id: ID!): Order
        success(sessionId:ID!):Success
    }

    type Mutation {
        addUser(userName: String!, email: String!, password: String!, location: String!): Auth
        updateUser(userName: String!, email: String!, password: String!, location: String!): User
        removeUser: User
        addProduct(name: String!, description: String, image: String!, price: Int!, ticketCount: Int, charity: ID!): Product
        updateProductInfo(productId: ID!, name: String!, description: String, image: String, price: Int!, ticketCount: Int!): Product
        removeProduct(productId: ID!): Product
        addCharity(name: String!, website: String, image: String, logo: String, description: String, mission: String, youtube: String): Charity
        updateCharity(charityId: ID!, name: String!, website: String, image: String, logo: String, description: String, mission: String, youtube: String): Charity
        removeCharity(charityId: ID!): Charity
        addTicket(_id: ID!, user_id: ID!, product_id: ID!): Ticket
        login(email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        addFavCharity(_id: ID!, charity_id: ID!): User
    }
`;

module.exports = typeDefs;

