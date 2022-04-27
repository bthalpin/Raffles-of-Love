const { User, Ticket, Product, Charity } = require('../models');                  // Require models folder.
const { signToken } = require('../utils/auths');                                  // Require signToken (JWT) from auth.js folder to verify integrity of claims.
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');             // Require stripe for payment functions.
const { AuthenticationError } = require('apollo-server-express');                 // Require AuthenticationError to perceive if server fails to authenticate required data.

// Functions that fulfill the queries defined in `typeDefs.js`.
const resolvers = {                 
  Query: {
    charities: async () => {
      return await Charity.find();                                                // Get and return all documents from the charity collection.
    },

    charity: async (parent, { charityId }) => {                                        // Get and return one document from the charity collection.
      return Charity.findOne({ _id: charityId });
    },

    products: async () => {
      return await Product.find().populate('charity');                                               // Get and return all documents from the product collection.
    },

    productsByCharity: async (parent, { charityId }) => {
      return await Product.find({ charity: charityId }).populate('charity');                      // Populate the charity sub documents when querying for Product. 
    },

    product: async (parent, { productId }) => {  
      // console.log(_id,'here')                                       // Defining a resolver to retrieve individual products.
      return await Product.findById(productId).populate('charity');                     // Using the parameter to find the matching product in the collection.
    },
    
    user: async (parent, args, context) => {                                      // Context will retrieve the logged-in user without specifically searching for them.
      if (context.user) {
        return User.findOne({ _id: context.user._id })
        .populate('tickets')
        .populate({
            path: 'tickets.product',
            populate: 'charity'
        });
      }
      throw new AuthenticationError('You need to be logged in!');                 // If user attempts to execute this mutation and isn't logged in, throw an error.
    },

    tickets: async () => {
      return await Ticket.find().populate('product');                                                // Get and return all documents from the product collection.
    },

    ticket: async (parent, { _id }) => {                                          // Defining a resolver to retrieve individual tickets.
      return await Ticket.findById(_id).populate('product');                      // Using the parameter to find the matching ticket in the collection.
    },

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const cart = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description
          // images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        cart.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        cart,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  // Define the functions that will fulfill the mutations.
  Mutation: {
    addUser: async (parent, { userName, email, password, location }) => {
      const user = await User.create({ userName, email, password, location });              // Create and return the new User object.
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

    removeUser: async (parent, args, context) => {                                // Set up mutation so a logged in user can only remove their profile and no one else's.
        if (context.user) {
          return User.findOneAndDelete({ _id: context.user._id });
        }
        throw new AuthenticationError('Not logged in');                           // If user attempts to execute this mutation and isn't logged in, throw an error.
      },

    addProduct: async (parent, { name, description, image, price, ticketCount, charity_id}) => {
      const product = await Product.create({ name, description, image, price, ticketCount, charity_id});
      return product;
    },

    updateProductInfo: async( parent, args, context) => {
      if (context.user) {
        return await Product.findByIdAndUpdate(args.productId,
          { name: args.name,
          description: args.description,
          image: args.image,
          price: args.price,
          ticketCount: args.ticketCount
        },
        {new: true});
      }
    },

    removeProduct: async (parent, { productId }) => {
        return Product.findOneAndDelete({ _id: productId });
      },

    addCharity: async (parent, { name, website, image, description }) => {
      const charity = await Charity.create({ name, website, image, description });
      return charity;
    },

    updateCharity: async (parent, args ) => {
        return await Charity.findByIdAndUpdate(args.charityId, {
          name: args.name,
          website: args.website,
          image: args.image,
          description: args.description
        }, 
        { new: true }
        );
    },

    removeCharity: async (parent, { charityId }) => {
        return Charity.findOneAndDelete({ _id: charityId });
    },

    //TODO: NEED TO RECONFIGURE
    addTicket: async(parent, { products }, context) => {
      if (context.user) {
        const ticket = Ticket.create(products.tickets.length +1);

        await User.findByIdAndUpdate(context.user._id, { $push: { tickets: ticket } });

        await Product.findByIdAndUpdate(products._id, { $push: { tickets: ticket } });

        return ticket;
      }

      throw new AuthenticationError('Not Logged in');
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