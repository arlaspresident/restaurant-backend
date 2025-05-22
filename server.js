const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');


const app = express();

//middleware
app.use(cors());
app.use(express.json());

//importera routes
const testRoutes = require('./routes/testRoutes');
app.use('/api', testRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/api/menu', menuRoutes);

connectDB();

//starta servern
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
