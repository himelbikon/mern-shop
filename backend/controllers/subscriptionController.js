const asyncHandler = require("express-async-handler")
const Subscription = require("../models/subscriptionModel")

// @desc all subscriptions
// @route GET /api/subscriptions
// @access Public
const allSubscriptions = asyncHandler(async (req, res) => {
  const subscriptions = await Subscription.find({})

  res.json(subscriptions)
})

// @desc create a subscription
// @route POST /api/subscriptions
// @access Public
const createSubscription = asyncHandler(async (req, res) => {
  const subscription = new Subscription({
    email: req.body.email,
  })

  const createdSubcription = await subscription.save()

  res.status(201).json(createdSubcription)
})

module.exports = { allSubscriptions, createSubscription }
