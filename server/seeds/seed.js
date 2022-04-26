const db = require('../config/connection');
const { User, Ticket, Product, Charity } = require('../models');

const productSeeds = require('./productSeeds.json');
const ticketSeeds = require('./ticketSeeds.json');
const charitySeeds = require('./charitySeeds.json')

db.once('open', async () => {
    try {
      await Product.deleteMany({});
      await Product.create(productSeeds);
  
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });

db.once('open', async () => {
  try {
    await Ticket.deleteMany({});
    await Ticket.create(ticketSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

db.once('open', async () => {
  try {
    await Charity.deleteMany({});
    await Charity.create(charitySeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});