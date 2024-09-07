const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const midJwt = require('../middleware/midJwt');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route example
router.get('/profile', midJwt, (req, res) => {
  res.status(200).json({ message: `Hello, ${req.user.name}` });
});

module.exports = router;
