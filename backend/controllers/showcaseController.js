const asyncHandler = require("express-async-handler")
const Showcase = require("../models/showcaseModel")

// @desc all showcases
// @route GET /api/showcases
// @access Public
const allShowcases = asyncHandler(async (req, res) => {
  let showcases = await Showcase.find({}).populate(
    "product",
    "_id name image description"
  )

  res.json(showcases) 
})

module.exports = { allShowcases }
