const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/validate', (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    jwt.verify(token, 'your_jwt_secret'); // Replace with your secret
    res.status(200).json({ message: 'Token is valid' });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

module.exports = router;
