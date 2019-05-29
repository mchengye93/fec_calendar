const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');


const app = express();


const distDir = path.join(__dirname, '../client/dist');
const publicDir = path.join(__dirname, '../public');

app.use(cors());
app.use(express.static(publicDir));
app.use(bodyParser.json());

app.get('/bookings', (req, res) => {
  const listingIdObj = req.query;
  db.getBookings(listingIdObj, res);
});

module.exports = app;
