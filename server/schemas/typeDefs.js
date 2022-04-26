const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Ticket {
        _id: ID
        puchaseDate: String
        ticketNumber: Int!
        product: [Product]
    }

    type Charity {
        name: String!
        website: String
        image: String
        description: String
    }
    
    type Product {
        name: String!
        description: String
        image: String
        ticketCount: Int
        charity: Charity!
    }

    type User {
        userName: String!
        email: String!
        password: String!
        tickets: [Ticket]

    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        charities: [Charity]
        charity(_id: ID!): Charity
        products(charity: ID, name: String): [Product]
        product(_id: ID!): Product
        user: User
        tickets(user: ID, name: String): [Ticket]
        ticket(_id: ID!): Ticket
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        addUser(userName: String!, email: String!, password: String!): Auth
        updateUser(userName: String!, email: String!, password: String!): User
        updateProduct(_id: ID!, ticketCount: Int!): Product
        removeUser: User
        login(email: String!, password: String!): Auth
    }

`;

module.exports = typeDefs;