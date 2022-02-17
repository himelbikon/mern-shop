const mongoose = require("mongoose")

const showcaseSchema = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Product",
  },
})

const Showcase = mongoose.model("Showcase", showcaseSchema)

module.exports = Showcase
