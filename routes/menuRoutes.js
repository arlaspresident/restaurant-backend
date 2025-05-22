const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// get/api/menu
router.get('/', menuController.getMenu);

// post /api/menu
router.post('/', menuController.addMenuItem);

router.put('/:id', menuController.updateMenuItem);
router.delete('/:id', menuController.deleteMenuItem);

module.exports = router;
