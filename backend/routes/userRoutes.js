const express = require("express")
const { login, getUserProfile } = require("../controllers/userController")

const router = express.Router()

router.route(`/login`).post(login)
// register
router.route(`/profile`).get(getUserProfile)
// edit profile
// create a user
// edit a user
// delete a user

module.exports = router
