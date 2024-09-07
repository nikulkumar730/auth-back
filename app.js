const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./connectDB/db');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes); 
module.exports = app;
