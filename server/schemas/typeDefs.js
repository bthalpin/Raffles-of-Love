const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Ticket {
        _id: ID
        purchaseDate: String
        ticketNumber: Int!
        product: [Product]
    }

    type Charity {
        _id: ID
        name: String
        website: String
        image: String
        description: String
    }
    
    type Product {
        _id: ID
        name: String!
        description: String
        image: String
        price: Int!
        ticketCount: Int
        charity: Charity
    }

    type User {
        _id: ID
        userName: String!
        email: String!
        password: String!
        location: String!
        tickets: [Ticket]
        favCharities: [Charity]

    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        charities: [Charity]
        charity(_id: ID!): Charity
        products: [Product]
        productsByCharity(charityId: ID!): [Product]
        product(_id: ID!): Product
        tickets: [Ticket]
        ticket(_id: ID!): Ticket
    }

    type Mutation {
        addUser(userName: String!, email: String!, password: String!, location: String!): Auth
        updateUser(userName: String!, email: String!, password: String!, location: String!): User
        removeUser: User
        addProduct(name: String!, description: String, image: String!, price: Int!, ticketCount: Int, charity_id: ID!): Product
        updateProductInfo(productId: ID!, name: String!, description: String, image: String, price: Int!, ticketCount: Int!): Product
        removeProduct(productId: ID!): Product
        addCharity(name: String!, website: String, image: String, description: String): Charity
        updateCharity(charityId: ID!, name: String!, website: String, image: String, description: String): Charity
        removeCharity(charityId: ID!): Charity
        addTicket(ticketNumber: Int!): Ticket
        login(email: String!, password: String!): Auth
        
    }
`;

module.exports = typeDefs;

// type Mutation {
//     
//     
//     
//     addTicket(_id: ID!, product_id: ID!): Ticket
//
// }

//query
//         
//     
//         checkout(products: [ID]!): Checkout