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
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  let user = await User.findById(req.user.id)

  if (user) {
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

// @desc Create new user
// @route POST /api/users/register
// @access Public
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    res.status(400)
    throw new Error(`Email already axist!`)
  }

  let newUser = new User({ name, email, password })

  try {
    newUser = await newUser.save()

    newUser = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser._id),
    }

    res.status(201).json(newUser)
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

module.exports = { login, getUserProfile, register }
