const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/id/:id', getProduct, (req, res) => {
  res.json(res.product);
});

async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findOne({ id: req.params.id });;
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

router.post('/', async (req, res) => {
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    brandId: req.body.brandId,
    categoryId: req.body.categoryId,
    subCategoryId: req.body.subCategoryId,
    userId: req.body.userId,
    detail: req.body.detail
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/count', async (req, res) => {
  try {
    const count = await Product.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;