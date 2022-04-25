const { User, Ticket, Product, Charity } = require('../models');                  // Require models folder.
const { signToken } = require('../utils/auth');                                   // Require signToken (JWT) from auth.js folder to verify integrity of claims.
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');             // Require stripe for payment functions.
const { AuthenticationError } = require('apollo-server-express');                 // Require AuthenticationError to perceive if server fails to authenticate required data.

// Functions that fulfill the queries defined in `typeDefs.js`.
const resolvers = {                 
  Query: {
    charities: async () => {
      return await Charity.find();                                                // Get and return all documents from the charity collection.
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

      return await Product.find(params).populate('charity');                      // Populate the charity subdocuments when querying for Product. 
    },
    product: async (parent, { _id }) => {                                         // Defining a resolver to retrieve individual products.
      return await Product.findById(_id).populate('charity');                     // Using the parameter to find the matching product in the collection.
    },
    user: async (parent, args, context) => {                                      // Context will retrieve the logged-in user without specifically searching for them.
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate({
            path: 'tickets.product',
            populate: 'charity'
        });
      }
      throw new AuthenticationError('You need to be logged in!');                 // If user attempts to execute this mutation and isn't logged in, throw an error.
    },
    tickets: {

    },
    ticket: {

    },
    checkout: async (parent, args, context) => {
        const url = new URL(context.headers.referer).origin;
        const order = new Order({ products: args.products });
        const line_items = [];
  
        const { products } = await order.populate('products');
  
        for (let i = 0; i < products.length; i++) {
          const product = await stripe.products.create({
            name: products[i].name,
            description: products[i].description,
            images: [`${url}/images/${products[i].image}`]
          });
  
          const price = await stripe.prices.create({
            product: product.id,
            unit_amount: products[i].price * 100,
            currency: 'usd',
          });
  
          line_items.push({
            price: price.id,
            quantity: 1
          });
        }
  
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`
        });
  
        return { session: session.id };
      }
    },
  },

  // Define the functions that will fulfill the mutations.
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });              // Create and return the new User object.
      const token = signToken(user);                                              // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created.
      return { token, user };                                                     // Return an `Auth` object that consists of the signed token and user's information.
    },
    updateUser: async (parent, args, context) => {                                // Add a third argument to the resolver to access data in our `context`.
      if (context.user) {                                                         // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in.
        return await User.findByIdAndUpdate(context.user._id, args,               // Find and update the matching User using args.
            { new: true });                                                       // Return the newly updated object instead of the original.
      }

      throw new AuthenticationError('Not logged in');                             // If user attempts to execute this mutation and isn't logged in, throw an error.
    },
    updateProduct: async (parent, { _id, ticketCount }) => {
      const decrement = Math.abs(ticketCount) * -1;

      return await Product.findByIdAndUpdate(_id, 
        { $inc: { ticketCount: decrement } }, 
        { new: true });                                                           // Return the newly updated object instead of the original.
    },
    removeUser: async (parent, args, context) => {                                // Set up mutation so a logged in user can only remove their profile and no one else's.
        if (context.user) {
          return User.findOneAndDelete({ _id: context.user._id });
        }
        throw new AuthenticationError('Not logged in');                           // If user attempts to execute this mutation and isn't logged in, throw an error.
      },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });                                 // Look up the user by the provided unique email address. One email per user.

      if (!user) {
        throw new AuthenticationError('No user found with this email address');   // If there is no user with that email address, return an Authentication error stating so.
      }

      const correctPw = await user.isCorrectPassword(password);                   // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided.

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');                   // If the password is incorrect, return an Authentication error stating so.
      }

      const token = signToken(user);                                              // If email and password are correct, sign user into the application with a JWT.

      return { token, user };                                                     // Return an `Auth` object that consists of the signed token and user's information.
    }
  }
};

module.exports = resolvers;