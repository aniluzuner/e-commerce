const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');

router.get('/', async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getBrand, (req, res) => {
  res.json(res.brand);
});

async function getBrand(req, res, next) {
  let brand;
  try {
    brand = await Brand.findOne({ id: req.params.id });;
    if (brand == null) {
      return res.status(404).json({ message: 'Cannot find brand' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.brand = brand;
  next();
}

router.post('/addBrand', async (req, res) => {
  const brand = new Brand({
    id: req.body.id,
    name: req.body.name,
  });

  try {
    const newBrand = await brand.save();
    res.status(201).json(newBrand);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;