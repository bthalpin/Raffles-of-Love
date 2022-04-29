const mongoose = require('mongoose');

const { Schema } = mongoose;

const charitySchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    website: {
        type: String
    },
    image: {
        type: String
    },
    logo: {
        type: String
    },
    description: {
        type: String
    },
    mission: {
        type: String
    },
    youtube: {
        type: String
    }
});

const Charity = mongoose.model('Charity', charitySchema);


module.exports = Charity;