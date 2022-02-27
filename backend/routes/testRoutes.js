const express = require("express")
const {
  allProducts,
  productsByField,
} = require("../controllers/testController")

const router = express.Router()

router.route("/products").get(allProducts)
router.route("/products/popular/:field").get(productsByField)

module.exports = router
