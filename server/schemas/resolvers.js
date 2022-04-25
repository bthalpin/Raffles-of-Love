// Test
const { User, Ticket, Product, Charity } = require('../models');        // Require models folder.
const { signToken } = require('../utils/auth');                         // Require signToken (JWT) from auth.js folder to verify integrity of claims.
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');   // Require stripe for payment functions.
const { AuthenticationError } = require('apollo-server-express');       // Require AuthenticationError to perceive if server fails to authenticate required data.

const resolvers = {
  Query: {
    charities: async () => {
      return await Charity.find();
    },
    charity: {

    },
    products: {

    },
    product: {

    },
    user: async (parent, args, context) => {                              // Context will retrieve the logged-in user without specifically searching for them.
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate({
            path: 'tickets.product',
            populate: 'charity'
        });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    tickets: {

    },
    ticket: {

    },
    checkout: {

    },
  }
}

