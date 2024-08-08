const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getCategory, (req, res) => {
  res.json(res.category);
});

async function getCategory(req, res, next) {
  let category;
  try {
    category = await Category.findOne({ id: req.params.id });;
    if (category == null) {
      return res.status(404).json({ message: 'Cannot find category' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.category = category;
  next();
}

router.post('/addCategory', async (req, res) => {
  const category = new Category({
    id: req.body.id,
    name: req.body.name,
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;