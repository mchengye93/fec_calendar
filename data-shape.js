// BOOKING SCHEMA DATA SHAPE
const airBnb = {
  _id: 'MongoDB Object ID',
  listingId: 'ID of Airbnb',

  averageRating: 'Float out of 5 Stars',
  numberOfRatings: 'Number',

  bookings: '[] dates array from start date/duration, blackout dates, etc.',
  minNights: 'Number',
  maxNights: 'Number',
};

// // Strech Goal: Cost Subdocument (days have variable prices) Array of Objects
// rate: [{
//   _id: 'MongoDB Object ID',
//   rate: '$ / Night',
//   date: 'Date',
// }]
