const { User, Ticket, Product, Charity } = require('../models');          // Require models folder.
const { signToken } = require('../utils/auth');                           // Require signToken (JWT) from auth.js folder to verify integrity of claims.
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');     // Require stripe for payment functions.
const { AuthenticationError } = require('apollo-server-express');         // Require AuthenticationError to perceive if server fails to authenticate required data.

// Functions that fulfill the queries defined in `typeDefs.js`.
const resolvers = {                 
  Query: {
    charities: async () => {
      return await Charity.find();                                        // Get and return all documents from the charity collection.
    },
    charity: async (parent, { _id }) => {
      return Charity.findOne({ _id: _id });
    },
    products: async (parent, { charity, name }) => {
      const params = {};

      if (charity) {
        params.charity = charity;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('charity');             // Populate the charity subdocuments when querying for Product. 
    },
    product: async (parent, { _id }) => {                                // Defining a resolver to retrieve individual products.
      return await Product.findById(_id).populate('charity');            // Using the parameter to find the matching product in the collection.
    },
    user: async (parent, args, context) => {                             // Context will retrieve the logged-in user without specifically searching for them.
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
  },

  // Define the functions that will fulfill the mutations.
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });    // Create and return the new School object
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, ticketCount }) => {
      const decrement = Math.abs(ticketCount) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { ticketCount: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
}

module.exports = resolvers;