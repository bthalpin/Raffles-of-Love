const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt')
const Order = require('./Order')

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'] // Match existing e-mail.
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    charity:{
        type: Schema.Types.ObjectId,
        ref: 'Charity'
    },
    location: {
        type: String,
        required: true
    },
    tickets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ticket'
        }    
    ],
    orders: [Order.schema]
});



userSchema.pre('save', async function(next) {
    if (this.isnew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;