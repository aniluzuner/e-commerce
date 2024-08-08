const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String
  }
});

module.exports = mongoose.model('Brand', BrandSchema);