const asyncHandler = require("express-async-handler")
const Product = require("../models/productModel")

// @desc Popular products
// @route GET /api/test/products/popular/views
// @access Public
const productsByViews = asyncHandler(async (req, res) => {
  const limit = Number(req.query.limit) || 0
  const page = Number(req.query.page) || 1

  let products = await Product.find({})
    .limit(limit)
    .skip(limit * (page - 1))
    .sort("-views -_id")

  products = products.map((product, index) => {
    return `${index + 1}: ` + product.name
  })

  res.json(products)
})

module.exports = {
  //   allProducts,
  //   getProductById,
  productsByViews,
  //   productsByOrderCount,
}
