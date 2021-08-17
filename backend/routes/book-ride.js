const router = require('express').Router();
const OfferRide = require('../models/offer-ride.model');
let BookRide = require('../models/book-ride.model');

router.route('/').get((req, res) => {
  BookRide.find()
    .then((bookRide) => res.json(bookRide))
    .catch((err) => res.status(400).json(err));
});

router.get('/ride-list', async (req, res) => {
  const ride = OfferRide.findOne({
    pickUpLocation: req.body.pickUpLocation,
    dropOffLocation: req.body.dropOffLocation,
  });
  if (ride) return res.json(ride);
  res.json('No Rides Availalble!');
});

//CREATING A POST REQUEST AND SAVING THE BODY REQUESTED DATA IN THE DATABASE
// router.route('/ride-list/add').post((req, res) => {
//   const pickUpLocation = req.body.pickUpLocation;
//   const dropOffLocation = req.body.dropOffLocation;
//   const requiredSeats = Number(req.body.requiredSeats);
//   const dateTime = Date.parse(req.body.dateTime);

//   const newBookRide = new BookRide({
//     pickUpLocation,
//     dropOffLocation,
//     requiredSeats,
//     dateTime,
//   });

//   newBookRide
//     .save()
//     .then(() => res.json('Ride Booked Succesfully'))
//     .catch((err) => res.status(400).json(err));
// });

module.exports = router;
