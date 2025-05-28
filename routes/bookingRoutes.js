const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const verifyToken = require('../middleware/verifyToken');
const { body, validationResult } = require('express-validator');

const validateBooking = [
    body('name').isString().notEmpty().withMessage('namn krävs'),
    body('email').isEmail().withMessage('ogiltig epostadress'),
    body('phone').isString().notEmpty().withMessage('telefonnummer krävs'),
    body('date').isISO8601().withMessage('datum krävs i formatet YYYY-MM-DD'),
    body('time').isString().notEmpty().withMessage('tid krävs'),
    body('guests').isInt({ min: 1 }).withMessage('minst 1 gäst krävs'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: 'valideringsfel', details: errors.array() });
      }
      next();
    }
  ];

// post /api/bookings
router.post('/', validateBooking, bookingController.createBooking);

// get /api/bookings
router.get('/',verifyToken, bookingController.getBookings);

router.delete('/:id', verifyToken, bookingController.deleteBooking);

module.exports = router;
