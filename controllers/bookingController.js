const Booking = require('../models/booking.model');

// post skapa bokning
exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: 'Fel vid bokning' });
  }
};

// get hämta alla bokningar
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Fel vid hämtning' });
  }
};
