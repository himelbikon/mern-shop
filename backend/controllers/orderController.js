const asyncHandler = require("express-async-handler")
const Order = require("../models/orderModel")

// @desc Create new order
// @route POST /api/orders
// @access Private
const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    // shippingAddress,
    // paymentMethod,
    // shippingPrice,
    // totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error("No order items")
  } else {
    // const order = new Order({
    //   orderItems,
    //   user: req.user._id,
    //   shippingAddress,
    //   paymentMethod,
    //   totalPrice,
    //   shippingPrice,
    // })

    const order = new Order({ ...req.body, user: req.user._id })
    console.log(`${order}`.yellow)

    try {
      const createdOrder = await order.save()
      res.status(201).json(createdOrder)
    } catch (error) {
      res.status(400)
      throw new Error(`Something is wrong!\nError: ${error}`)
    }
  }
})

module.exports = {
  createOrder,
}
