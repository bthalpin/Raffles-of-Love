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
        name: String!
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
        charity: Charity!
        tickets: [Ticket]
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
        charities: [Charity]
        charity(_id: ID!): Charity
        products: [Product]
        productsByCharity(charityId: ID!): [Product]
        product(_id: ID!): Product
        user(_id: ID!) : User
    }

    type Mutation {
        addUser(userName: String!, email: String!, password: String!, location: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;

// type Mutation {
//     updateUser(userName: String!, email: String!, password: String!, location: Location!): User
//     removeUser: User
//     addProduct(name: String!, description: String, image: String!, price: Int!, ticketCount: Int, charity_id: ID!): Product
//     updateProductInfo(_id: ID!, name: String!, description: String, image: String, price: Int!,  ticketCount: Int!, charity: Charity, tickets: Ticket): Product
//     removeProduct: Product
//     addCharity(name: String!, website: String, image: String, description: String): Charity
//     updateCharity(name: String!, website: String, image: String, description: String): Charity
//     removeCharity: Charity
//     addTicket(_id: ID!, product_id: ID!): Ticket
// }

//query
//         tickets(user: ID, name: String): [Ticket]
//         ticket(_id: ID!): Ticket
//         checkout(products: [ID]!): Checkout