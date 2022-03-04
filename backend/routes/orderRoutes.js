const express = require("express")
const { authenticate } = require("../middleware/authMiddleware")
const { createOrder } = require("../controllers/orderController")

const router = express.Router()

router.route("/").post(authenticate, createOrder)

module.exports = router
