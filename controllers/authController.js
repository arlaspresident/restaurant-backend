const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// registrera användare
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // kontrollera att användarnamn inte redan finns
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ error: 'Användarnamnet är redan taget' });

    // hasha lösenord
    const hashedPassword = await bcrypt.hash(password, 10);

    // skapa ny användare
    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'Användare registrerad' });
  } catch (err) {
    res.status(500).json({ error: 'Serverfel vid registrering' });
  }
};

// logga in användare
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ error: 'Fel användarnamn eller lösenord' });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).json({ error: 'Fel användarnamn eller lösenord' });

    // skapa jwt
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

    res.json({ message: 'Inloggning lyckades', token });
  } catch (err) {
    res.status(500).json({ error: 'Serverfel vid inloggning' });
  }
};
