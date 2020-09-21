const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const app = express();
require('dotenv').config();

/* Serve routes */
router.use('/user', userRouter);

const user = {
  username: '',
  password: '',
}

try {
  await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}.`);
  });
} catch(error) {
  console.error(error);
}
