const express = require('express')

const router = express.Router()

// controller
const { loginUser, signupUser } = require('../controllers/userController')

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// TODO: user manipulation

module.exports = router
