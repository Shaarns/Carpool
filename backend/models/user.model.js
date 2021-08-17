const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CREATING REGISTRATION SCHEMA
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('user', userSchema);
module.exports = User;
