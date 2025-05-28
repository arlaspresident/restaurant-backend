const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const verifyToken = require('../middleware/verifyToken');
const { body, validationResult } = require('express-validator');


// valideringsmiddleware
const validateMenuInput = [
    body('title').isString().notEmpty().withMessage('titel krävs'),
    body('description').isString().notEmpty().withMessage('beskrivning krävs'),
    body('price').isFloat({ min: 0 }).withMessage('pris måste vara ett positivt tal'),
    body('category').isString().notEmpty().withMessage('kategori krävs'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: 'valideringsfel', details: errors.array() });
      }
      next();
    }
  ];

// get/api/menu
router.get('/', menuController.getMenu);

// post /api/menu
router.post('/', verifyToken, validateMenuInput, menuController.addMenuItem);
router.put('/:id', verifyToken, validateMenuInput, menuController.updateMenuItem);
router.delete('/:id', verifyToken, menuController.deleteMenuItem);

module.exports = router;
