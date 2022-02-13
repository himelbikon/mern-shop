const express = require("express")
const { allCategories } = require("../controllers/categoryController")

const router = express.Router()

router.route("/").get(allCategories)

module.exports = router
