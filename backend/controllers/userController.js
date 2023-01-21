const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.SECRET_STRING, { expiresIn: '3d' })
}

// login
const loginUser = async (req, res) => {
	const { email, password } = req.body //TODO: Add username attribute
	try {
		const user = await User.loginUser(email, password)
		const token = createToken(user._id)
		res.status(200).json({ email, token })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// signup
const signupUser = async (req, res) => {
	const { email, password } = req.body

	try {
		const user = await User.signupUser(email, password)
		const token = createToken(user._id)
		res.status(200).json({ email, token })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

module.exports = { loginUser, signupUser }
