const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 1.00
    },
    ticketCount: {
        type: Number,
        min:0,
        default: 0
    },
    charity: {
        type: Schema.Types.ObjectId,
        ref: 'Charity',
        required: true
    },
    tickets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ticket'
        }
    ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;