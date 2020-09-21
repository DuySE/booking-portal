const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  type: {
    type: String,
    enum: ['Dropdown with Health Talk', 'Wellness Events', 'Fitness Activities'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Pending Review', 'Approved', 'Rejected'],
    required: true
  },
  user: { type: Schema.Types.String, ref: 'User' }
});

const Booking = mongoose.model('Booking', bookingSchema, 'Booking');

module.exports = Booking;
