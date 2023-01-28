const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.SECRET_STRING, { expiresIn: '3d' })
}

// login
const loginUser = async (req, res) => {
	const { email, password } = req.body
	try {
		const user = await User.loginUser(email, password)
		const token = createToken(user._id)
		const username = user.username
		res.status(200).json({ email, username, token })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// signup
const signupUser = async (req, res) => {
	const { email, username, password } = req.body

	try {
		const user = await User.signupUser(email, username, password)
		const token = createToken(user._id)
		res.status(200).json({ email, username, token })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// update
const updateUser = async (req, res) => {
	const { email, role } = req.body
	try {
		const user_id = req.user._id
		const admin = await User.findOne(user_id)
		const target = await User.updateUser(email, role, admin.role)
		res.status(200).json({ email, target })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

module.exports = { loginUser, signupUser, updateUser }
