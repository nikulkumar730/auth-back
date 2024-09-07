const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const registerUser = (req, res) => {
  userModel.create(req.body)
    .then(user => {
      const token = jwt.sign({ id: user._id, name: user.name }, 'your_jwt_secret', { expiresIn: '1h' });
      res.status(200).json({ token });
    })
    .catch(err => res.status(500).json(err));
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          const token = jwt.sign({ id: user._id, name: user.name }, 'your_jwt_secret', { expiresIn: '1h' });
          const username=user.name
          res.status(200).json({ token,username });
        } else {
          res.status(401).json('incorrect password');
        }
      } else {
        res.status(404).json('user not found');
      }
    })
    .catch(err => res.status(500).json(err));
};

module.exports = {
  registerUser,
  loginUser,
};
