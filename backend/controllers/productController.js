const asyncHandler = require("express-async-handler")
const Product = require("../models/productModel")

// @desc all products
// @route GET /api/products && /api/products/latest
// @access Public
const allProducts = asyncHandler(async (req, res) => {
  const limit = Number(req.query.limit) || 0
  const page = Number(req.query.page) || 1

  const products = await Product.find({})
    .limit(limit)
    .skip(limit * (page - 1))
    .sort("-_id")

  res.json(products)
})

// @desc Get single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id)

  if (product) {
    product.views++
    product = await product.save()

    res.json(product)
  } else {
    res.status(404)
    throw new Error("Product not Found!")
  }
})

// @desc Popular products
// @route GET /api/products/popular/views
// @access Public
const productsByViews = asyncHandler(async (req, res) => {
  const limit = Number(req.query.limit) || 0
  const page = Number(req.query.page) || 1

  const products = await Product.find({})
    .limit(limit)
    .skip(limit * (page - 1))
    .sort("-views -_id")

  res.json(products)
})

// @desc Most ordered products
// @route GET /api/products/popular/ordercount
// @access Public
const productsByOrderCount = asyncHandler(async (req, res) => {
  const limit = Number(req.query.limit) || 0
  const page = Number(req.query.page) || 1

  const products = await Product.find({})
    .limit(limit)
    .skip(limit * (page - 1))
    .sort("-orderCount -_id")

  res.json(products)
})

module.exports = {
  allProducts,
  getProductById,
  productsByViews,
  productsByOrderCount,
}
