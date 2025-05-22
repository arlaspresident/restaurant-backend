const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  guests: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  message: String
});

module.exports = mongoose.model('Booking', bookingSchema);
