const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String
  },
  price: {
    type: Number
  },
  stock: {
    type: Number
  },
  brandId: {
    type: Number
  },
  categoryId: {
    type: Number
  },
  subCategoryId: {
    type: Number
  },
  userId: {
    type: String
  },
  detail: {
    type: String
  }
});

module.exports = mongoose.model('Product', ProductSchema);
