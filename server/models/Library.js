const mongoose = require('mongoose');

const { Schema } = mongoose;

const librarySchema = new Schema ({
    favorites: [{
        favId: {type: String},
        mediaType: {type: String}
    }],
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Library = mongoose.model('Library', librarySchema);

module.exports = Library;