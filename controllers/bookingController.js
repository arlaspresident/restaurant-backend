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

exports.deleteBooking = async (req, res) => {
    try {
      const deleted = await Booking.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Bokning hittades inte' });
      res.json({ message: 'Bokning borttagen' });
    } catch (err) {
      res.status(400).json({ error: 'Fel vid borttagning' });
    }
  };
  
