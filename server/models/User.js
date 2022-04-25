const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt')
const Ticket = require('./Ticket')
const Charity = require('./Charity')

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    charityAdmin: [
        // linked to charity ID
        // if not admin null otherwise would be linked to charity ID
        // type: Boolean,
        // default: false,
        // charity: [Charity.schema]},
    ],
    tickets: [Ticket.schema],
    // favCharitys: [Charity.schema],
    // street addres // city // state
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