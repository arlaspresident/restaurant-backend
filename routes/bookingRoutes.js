const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// post /api/bookings
router.post('/', bookingController.createBooking);

// get /api/bookings
router.get('/', bookingController.getBookings);

module.exports = router;
