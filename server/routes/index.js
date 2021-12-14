const express = require('express');
const router = express.Router();
// User controllers
const {
  login,
  getAllUsers,
} = require('../controllers/user');
const {
  GET_ALL_BOOKINGS_BY_USER,
  GET_BOOKING_BY_ID,
  CREATE_BOOKING,
  UPDATE_BOOKING,
  GET_ALL_USERS,
} = require('./url');
// Booking controllers
const {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
} = require('../controllers/booking');

// User routes
router.post('/', login);
router.get(GET_ALL_USERS, getAllUsers);
// Booking routes
router.get(GET_ALL_BOOKINGS_BY_USER, getAllBookings);
router.get(GET_BOOKING_BY_ID, getBookingById);
router.post(CREATE_BOOKING, createBooking);
router.patch(UPDATE_BOOKING, updateBooking);

module.exports = router;
