const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String
  }
});

module.exports = mongoose.model('Category', CategorySchema);