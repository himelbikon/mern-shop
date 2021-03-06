const asyncHandler = require("express-async-handler")
const Product = require("../models/productModel")
const Category = require("../models/categoryModel")

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

// @desc Products by a specific field order
// @route GET /api/products/popular/:field
// @access Public
const productsByField = asyncHandler(async (req, res) => {
  const limit = Number(req.query.limit) || 0
  const page = Number(req.query.page) || 1

  const products = await Product.find({})
    .limit(limit)
    .skip(limit * (page - 1))
    .sort(`-${req.params.field} -_id`)

  res.json(products)
})

// @desc Category products
// @route GET /api/products/category/:slug
// @access Public
const categoryProducts = asyncHandler(async (req, res) => {
  const limit = Number(req.query.limit) || 0
  const page = Number(req.query.page) || 1

  const category = await Category.findOne({ slug: req.params.slug })

  const products = await Product.find({ category: category._id })
    .limit(limit)
    .skip(limit * (page - 1))
    .sort(`-_id`)

  res.json(products)
})

module.exports = {
  allProducts,
  getProductById,
  productsByField,
  categoryProducts,
}
