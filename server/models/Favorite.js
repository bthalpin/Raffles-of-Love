const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoriteSchema = new Schema({
    user: {
        
    }
})


const User = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite };