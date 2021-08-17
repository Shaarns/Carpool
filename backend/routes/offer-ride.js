const router = require('express').Router();
let OfferRide = require('../models/offer-ride.model');

router.route('/').get((req, res) => {
  // const ride = OfferRide.findOne({
  //   pickUpLocation: req.body.pickUpLocation,
  //   dropOffLocation: req.body.dropOffLocation,
  // });
  // if (ride) return res.json(ride);
  // res.json('No Rides Availalble!');
  OfferRide.find().then((offerride) => res.json(offerride));
});

router.route('/add').post((req, res) => {
  const pickUpLocation = req.body.pickUpLocation;
  const dropOffLocation = req.body.dropOffLocation;
  const price = Number(req.body.price);
  const availableSeats = Number(req.body.availableSeats);
  const dateTime = Date.parse(req.body.dateTime);

  const newOfferRide = new OfferRide({
    pickUpLocation,
    dropOffLocation,
    price,
    availableSeats,
    dateTime,
  });

  newOfferRide
    .save()
    .then(() => res.json('Ride Offer Successfully'))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
