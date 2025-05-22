const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');

connectDB();
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//importera routes
const testRoutes = require('./routes/testRoutes');
app.use('/api', testRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/api/menu', menuRoutes);

const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

//starta servern
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
