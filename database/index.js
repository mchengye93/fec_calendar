const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/airbnb-calendar', { useNewUrlParser: true });


const { Schema } = mongoose;

const listingSchema = new Schema({
  _id: Number,
  listingId: { type: Number, required: true },
  // new Date("<YYYY-mm-dd>")
  bookings: [Date],
  minNights: { type: Number, default: 1 },
  maxNights: { type: Number, default: 30 },
  finalDay: { type: Date },

});
// test
const Listing = mongoose.model('Listing', listingSchema);


// const listing = new Listing({
//   _id: 0,
//   listingId: 0,
//   bookings: ['2019-05-01', '2019-04-02', '2019-03-03'],
//   minNights: 1,
//   maxNights: 3,
//   finalDay: '2019-06-10',

// });
// listing.save().then(() => console.log('Listing created!'));
const getBookings = (listingIdObj, res) => {
  // Listing.find().
  console.log('db listIdobj', listingIdObj);
  Listing.find(listingIdObj, (err, results) => {
    if (err) {
      res.end(err);
    } else {
      console.log('inside dbs getBookings result:', JSON.stringify(results));
      res.end(JSON.stringify(results));
    }
  });
};


module.exports = {
  getBookings,
};
