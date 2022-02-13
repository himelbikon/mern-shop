const asyncHandler = require("express-async-handler")
const Category = require("../models/categoryModel")

// @desc all categories
// @route GET /api/categories
// @access Public
const allCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({})

  res.json(categories)
})

module.exports = {
  allCategories,
}
