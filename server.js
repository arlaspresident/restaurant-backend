const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//importera routes
const testRoutes = require('./routes/testRoutes');
app.use('/api', testRoutes);

//starta servern
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
