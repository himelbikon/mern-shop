const mongoose = require("mongoose")

const subscriptionSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
})

const Subscription = mongoose.model("Subscription", subscriptionSchema)

module.exports = Subscription
