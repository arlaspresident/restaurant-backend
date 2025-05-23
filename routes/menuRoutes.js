const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const verifyToken = require('../middleware/verifyToken');


// get/api/menu
router.get('/', menuController.getMenu);

// post /api/menu
router.post('/', verifyToken, menuController.addMenuItem);
router.put('/:id', verifyToken, menuController.updateMenuItem);
router.delete('/:id', verifyToken, menuController.deleteMenuItem);

module.exports = router;
