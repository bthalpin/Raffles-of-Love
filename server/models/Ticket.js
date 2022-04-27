const mongoose = require('mongoose')

const { Schema } = mongoose;

const ticketSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    ticketNumber: {
        type: Number,
        required: true,
    },

});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;