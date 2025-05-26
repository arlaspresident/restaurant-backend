const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const verifyToken = require('../middleware/verifyToken');

// post /api/bookings
router.post('/', bookingController.createBooking);

// get /api/bookings
router.get('/',verifyToken, bookingController.getBookings);

router.delete('/:id', verifyToken, bookingController.deleteBooking);

module.exports = router;
