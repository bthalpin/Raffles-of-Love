const mongoose = require('mongoose')

const { Schema } = mongoose;

const ticketSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    ticketnumber: {
        type: Number,
        required: true,
        unique: true
    },
    product: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;