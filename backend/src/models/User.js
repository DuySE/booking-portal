const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    required: true
  },
  booking: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
});

const User = mongoose.model('User', userSchema, 'User');

// Cascade delete for all bookings in relation to the user
userSchema.pre('remove', next => {
  this.model('Booking').deleteMany({ user: this.username }, next);
});

module.exports = User;
