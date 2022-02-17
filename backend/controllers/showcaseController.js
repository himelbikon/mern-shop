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

  //   showcases = showcases.map((showcase) => {
  //     return Showcase.findById(showcase._id).populate("product", "name")
  //   })

  res.json(showcases) //.populate("Product", "_id name image description")
})

module.exports = { allShowcases }
