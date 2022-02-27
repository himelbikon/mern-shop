const asyncHandler = require("express-async-handler")
const Product = require("../models/productModel")

// @desc all products
// @route GET /api/test/products && /api/test/products/latest
// @access Public
const allProducts = asyncHandler(async (req, res) => {
  const limit = Number(req.query.limit) || 0
  const page = Number(req.query.page) || 1

  let products = await Product.find({})
    .limit(limit)
    .skip(limit * (page - 1))
    .sort("-_id")

  products = products.map((product, index) => {
    return `${index + 1} ` + product.name
  })

  res.json(products)
})

// @desc Products by a specific field order
// @route GET /api/test/products/popular/:field
// @access Public
const productsByField = asyncHandler(async (req, res) => {
  const limit = Number(req.query.limit) || 0
  const page = Number(req.query.page) || 1

  let products = await Product.find({})
    .limit(limit)
    .skip(limit * (page - 1))
    .sort(`-${req.params.field} -_id`)

  products = products.map((product, index) => {
    return `${index + 1} ` + product.name
  })

  res.json(products)
})

module.exports = {
  productsByField,
  allProducts,
  // productsByViews,
  //   productsByOrderCount,
}
