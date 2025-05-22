const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('ansluten till mongodb');
  } catch (err) {
    console.error('fel vid anslutning:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
