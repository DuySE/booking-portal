const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
      type: String,
    },
    role: {
      type: Boolean,
      required: true,
    },
    token: {
      type: String,      
    },
    bookings: [{ type: Schema.Types.ObjectId, ref: 'booking'}],
});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;
