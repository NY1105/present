const express = require('express')

const router = express.Router()

// controller
const { loginUser, signupUser, updateUser } = require('../controllers/userController')
const requireAuth = require('../middleware/requireAuth')

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.use(requireAuth)

// update route
router.patch('/update', updateUser)

module.exports = router
