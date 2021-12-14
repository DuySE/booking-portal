const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  datetime: [{
    type: Date,
  }],
  status: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
}, {
  versionKey: false,
});

const Booking = mongoose.model('Booking', bookingSchema, 'booking');

module.exports = Booking;
