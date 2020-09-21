const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Booking = require('../models/Booking');

let bookings = [];

router.get('/:username/bookings', async (req, res) => {
  const bookings = await Booking.find({
    user: req.params.username
  }).sort({ date: 1 });
  try {
    await user.exec(() => {
      return res.status(200).send(bookings);
    });
  } catch (error) {
    return res.status(400).send(error);
  };
});

router.get('/:username/bookings', async (req, res) => {
  bookings = await Booking.find({
    user: req.params.username
  }).sort({ date: 1 });
  try {
    await user.exec(() => {
      return res.status(200).send(bookings);
    });
  } catch (error) {
    return res.status(400).send(error);
  };
});

router.put('/booking/:id', (req, res) => {
  let updateIndex = bookings.findIndex(booking => booking._id === mongoose.Types.ObjectId(req.params.id));
  let newBooking = {
    type: req.body.type,
    location: req.body.location,
    date: req.body.date,
    status: req.body.status
  }
  if (updateIndex === -1) problems.push(newBooking)
  else problems[updateIndex] = newProblem
  return res.send(problems)
})

module.exports = router;
