const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes');
const app = express();

// Serving
app.use(cors());
app.use(express.json());
app.use(routes);

mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}!`);
    });
  });
