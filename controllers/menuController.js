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

// put, uppdatera menyobjekt
exports.updateMenuItem = async (req, res) => {
    try {
      const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ error: 'Rätt hittades inte' });
      res.json(updatedItem);
    } catch (err) {
      res.status(400).json({ error: 'Fel vid uppdatering' });
    }
  };
  
  // delete, ta bort menyobjekt
  exports.deleteMenuItem = async (req, res) => {
    try {
      const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ error: 'Rätt hittades inte' });
      res.json({ message: 'Rätt borttagen' });
    } catch (err) {
      res.status(400).json({ error: 'Fel vid borttagning' });
    }
  };
  
