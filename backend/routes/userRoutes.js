const express = require("express")
const { authenticate, adminOnly } = require("../middleware/authMiddleware")
const {
  login,
  getUserProfile,
  register,
} = require("../controllers/userController")

const router = express.Router()

router.route(`/login`).post(login)
router.route(`/register`).post(register)
router.route(`/profile`).get(authenticate, getUserProfile)
// edit profile
// create a user
// edit a user
// delete a user

module.exports = router
