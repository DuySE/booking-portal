// Models
const Booking = require('../models/booking');
const User = require('../models/user');

// APIs
const getAllBookings = async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username });
  const bookings = await Booking.find({ user: user._id });
  if (bookings) return res.status(200).send(bookings);
  return res.status(404).send('Empty data');
};

const getBookingById = async (req, res) => {
  const { _id } = req.params;
  const booking = await Booking.findById({ _id });
  if (booking) return res.status(200).send(booking);
  return res.status(404).send('Not found');
};

const createBooking = async (req, res) => {
  const { booking } = req.body;
  let created = false;
  await Booking.create(booking).then(async (item) => {
    created = await User.findOneAndUpdate(booking.user,
      { $push: { bookings: item } },
      { upsert: true }, // creates the object if it doesn't exist
    )
  });
  if (created) return res.status(200).send('Create successfully');
  return res.status(400).send('Create failed');
};

const updateBooking = async (req, res) => {
  const { id, status, reason } = req.body;
  // Find and update status of booking
  const updatedBooking = await Booking.findByIdAndUpdate(id, {
    status,
    reason,
  });
  if (updatedBooking) return res.status(200).send('Update successfully!');
  return res.status(400).send('Cannot update status!');
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
};
