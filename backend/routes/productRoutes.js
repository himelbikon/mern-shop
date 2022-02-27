const express = require("express")
const {
  allProducts,
  getProductById,
  categoryProducts,
  productsByField,
} = require("../controllers/productController")

const router = express.Router()

router.route("/").get(allProducts)
router.route("/:id").get(getProductById)
router.route("/popular/latest").get(allProducts)
router.route("/popular/:field").get(productsByField)
router.route("/category/:slug").get(categoryProducts)

// create products
// edit products
// delete products

module.exports = router
