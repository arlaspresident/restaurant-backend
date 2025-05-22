const MenuItem = require('../models/menuItem.model');

// get alla rätter
exports.getMenu = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Serverfel' });
  }
};

// post ny rätt
exports.addMenuItem = async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: 'Ogiltig data' });
  }
};
