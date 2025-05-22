const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  imageUrl: String,
  category: { 
    type: String, 
    enum: ['Förrätt', 'Varmrätt', 'Efterrätt', 'Dryck'], 
    required: true 
  }
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
