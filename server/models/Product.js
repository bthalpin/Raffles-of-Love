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
    donation: {
        type: Number,
        required: true,
        min: 1.00
    },
    ticketcount: {
        type: Number,
        min:0,
        default: 0
    },
    charity: {
        type: Schema.Types.ObjectId,
        ref: 'Charity',
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;