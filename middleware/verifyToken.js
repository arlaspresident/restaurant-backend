const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // token skickas som bearer
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // sparar userid i request
      next(); // fortsätt till route
    } catch (err) {
      return res.status(403).json({ error: 'Ogiltig token' });
    }
  } else {
    return res.status(401).json({ error: 'Token krävs' });
  }
};

module.exports = verifyToken;
