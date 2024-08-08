const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String
  },
  parentCategoryId:{
    type: Number
  }
});

module.exports = mongoose.model('SubCategory', SubCategorySchema);