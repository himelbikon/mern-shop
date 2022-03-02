const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const generateToken = require("../utils/generateToken")

// @desc Login
// @route POST /api/users/login
// @access Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  let user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    }

    res.json(user)
  } else {
    res.status(400)
    throw new Error(`Invalid email or password`)
  }
})

// @desc Get user profile
// @route GET /api/users/profile
// @access Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.json("user")
  //   let user = await User.findOne({ _id: req.user._id })

  //   if (user ) {
  //     user = {
  //       _id: user._id,
  //       name: user.name,
  //       email: user.email,
  //       isAdmin: user.isAdmin,
  //       token: generateToken(user._id),
  //     }

  //     res.json(user)
  //   } else {
  //     res.status(400)
  //     throw new Error(`Invalid email or password`)
  //   }
})

module.exports = { login, getUserProfile }
