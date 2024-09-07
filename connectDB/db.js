const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect('mongodb+srv://nikul:nikul123@cluster0.ypdrsjj.mongodb.net/MERN-CURD')
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Something went wrong: ' + err));
};

module.exports = connectDB;
