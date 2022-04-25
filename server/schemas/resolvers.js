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

      return await Product.find(params).populate('charity');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('charity');
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
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    updateUser,
    updateProduct,
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
