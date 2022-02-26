const express = require("express")
const { productsByViews } = require("../controllers/testController")

const router = express.Router()

router.route("/products/popular/views").get(productsByViews)

module.exports = router
