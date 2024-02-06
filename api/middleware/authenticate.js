// middleware/authenticate.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'MIND_GROWTH');
    req.userData = { userId: decoded.userId };
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failed' });
  }
};
