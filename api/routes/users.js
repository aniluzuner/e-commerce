const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    
    if (!user) {
      return res.status(404).json({ message: "Incorrect username or password" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

