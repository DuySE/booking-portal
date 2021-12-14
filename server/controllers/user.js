const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

// Models
const User = require('../models/user');

// APIs
const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    'username': username
  });
  /* Password is hashed using bcrypt and stored in DB
    compare password login with hashed password in DB
  */
  if (user) {
    bcrypt.compare(password, user.password, (err, same) => {
      if (same) {
        const token = jwt.sign(
          { _id: user._id, username },
          process.env.TOKEN_KEY, { expiresIn: "2h" },
        );
        user.token = token;
        return res.status(200).send(user);
      } else {
        return res.status(404).send('Invalid username or password.');
      }
    });
  }
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (users) return res.status(200).send(users);
  return res.status(404).send('Empty data');
};

module.exports = { login, getAllUsers };
