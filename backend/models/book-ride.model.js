const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookRideSchema = new Schema(
  {
    pickUpLocation: { type: String, reqiured: true, minlength: 3 },
    dropOffLocation: { type: String, required: true, minlenth: 3 },
    requiredSeats: { type: String, required: true },
    dateTime: { type: Date, required: true },
  },
  {
    timetamps: true,
  }
);

const BookRide = mongoose.model('bookRide', bookRideSchema);
module.exports = BookRide;
