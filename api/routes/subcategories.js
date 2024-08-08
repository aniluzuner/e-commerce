const express = require('express');
const router = express.Router();
const SubCategory = require('../models/SubCategory');

router.get('/', async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.json(subCategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getSubCategory, (req, res) => {
  res.json(res.subCategory);
});

async function getSubCategory(req, res, next) {
  let subCategory;
  try {
    subCategory = await SubCategory.findOne({ id: req.params.id });;
    if (subCategory == null) {
      return res.status(404).json({ message: 'Cannot find subCategory' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.subCategory = subCategory;
  next();
}

router.post('/addsubcategory', async (req, res) => {
  const subCategory = new SubCategory({
    id: req.body.id,
    name: req.body.name,
    parentCategoryId: req.body.parentCategoryId
  });

  try {
    const newSubCategory = await subCategory.save();
    res.status(201).json(newSubCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;