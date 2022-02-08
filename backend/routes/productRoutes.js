const express = require("express")
const {
  allProducts,
  getProductById,
  popularProducts,
  productsByOrderCount,
} = require("../controllers/productController")

const router = express.Router()

router.route("/").get(allProducts)
router.route("/popular").get(popularProducts)
router.route("/popularbyorder").get(productsByOrderCount)
router.route("/:id").get(getProductById)
// create products
// edit products
// delete products

module.exports = router
