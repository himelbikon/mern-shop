const asyncHandler = require("express-async-handler")
const Showcase = require("../models/showcaseModel")

// @desc all showcases
// @route GET /api/showcases
// @access Public
const allShowcases = asyncHandler(async (req, res) => {
  const showcases = await Showcase.find({}).populate(
    "product",
    "_id name image description"
  )

  res.json(showcases)
})

// @desc create a showcase
// @route GET /api/showcases/add
// @access Private/Admin
const createShowcase = asyncHandler(async (req, res) => {
  const showcase = new Showcase({
    product: req.body.product,
  })

  const savedShowcase = await showcase.save()

  res.status(201).json(savedShowcase)
})

module.exports = { allShowcases }
