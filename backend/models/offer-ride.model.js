const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerRideSchema = new Schema(
  {
    pickUpLocation: { type: String, reuired: true, minlength: 3 },
    dropOffLocation: { type: String, required: true, minlength: 3 },
    price: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
    dateTime: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const OfferRide = mongoose.model('offerRide', offerRideSchema);
module.exports = OfferRide;
