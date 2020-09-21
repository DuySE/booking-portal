const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
  const user = await User.find({
    username: req.body.username
  });
  try {
    await user.exec(() => {
      if (!user) {
        return res.status(400).send({ message: 'Invalid username or password.' });
      }
      // Compare hashed password stored in DB and password sent by request
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).send({ message: 'Invalid username or password.' })
      }
      return res.status(200).send({ message: 'Login successfully.' });
    });
  } catch (error) {
    return res.status(500).send(error);
  };
});

module.exports = router;
