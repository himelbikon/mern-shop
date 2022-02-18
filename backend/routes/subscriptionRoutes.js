const express = require("express")
const {
  allSubscriptions,
  createSubscription,
} = require("../controllers/subscriptionController")

const router = express.Router()

router.route("/").get(allSubscriptions).post(createSubscription)

module.exports = router
