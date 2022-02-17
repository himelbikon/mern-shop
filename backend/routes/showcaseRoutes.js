const express = require("express")
const { allShowcases } = require("../controllers/showcaseController")

const router = express.Router()

router.route("/").get(allShowcases)

module.exports = router
