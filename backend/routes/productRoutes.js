const express = require("express")
const {
  allProducts,
  getProductById,
  productsByViews,
  productsByOrderCount,
} = require("../controllers/productController")

const router = express.Router()

router.route("/").get(allProducts)
router.route("/popular/latest").get(allProducts)
router.route("/popular/views").get(productsByViews)
router.route("/popular/ordercount").get(productsByOrderCount)
router.route("/:id").get(getProductById)
// create products
// edit products
// delete products

module.exports = router
