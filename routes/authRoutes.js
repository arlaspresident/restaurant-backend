const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// psot /api/auth/register
router.post('/register', authController.register);

// post /api/auth/login
router.post('/login', authController.login);

module.exports = router;
