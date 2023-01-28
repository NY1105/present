const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
	email: {
		type: String,
		require: true,
		unique: true,
	},
	username: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
	role: {
		type: String,
		required: [true, 'Please provide role'],
		enum: {
			values: ['admin', 'user'],
			message: '',
		},
		default: 'user',
	},
})

userSchema.statics.signupUser = async function (email, username, password) {
	if (!username || !email || !password) {
		throw Error('Fill in all required fields')
	}
	if (!validator.isEmail(email)) {
		throw Error('Email is not valid')
	}
	if (!validator.isStrongPassword(password)) {
		throw Error('Password is not strong enough')
	}

	const exists_email = await this.findOne({ email })
	if (exists_email) {
		throw Error('Email already in use')
	}

	const exists_username = await this.findOne({ username })
	if (exists_username) {
		throw Error('Username already in use')
	}

	const salt = await bcrypt.genSalt(10)
	const hash = await bcrypt.hash(password, salt)

	const user = await this.create({
		email,
		username,
		password: hash,
		role: 'user',
	})
	return user
}

// static login
userSchema.statics.loginUser = async function (email, password) {
	if (!email || !password) {
		throw Error('Fill in all required fields')
	}
	const user = await this.findOne({ email })
	if (!user) {
		throw Error('Invalid email')
	}

	const match = await bcrypt.compare(password, user.password)
	if (!match) {
		throw Error('Incorrect password')
	}

	return user
}

userSchema.statics.updateUser = async function (email, role, admin) {
	if (!email || !role || !admin) {
		if (!email) {
			throw Error('email')
		}
		if (!role) {
			throw Error('role')
		}
		if (!admin) {
			throw Error('admin')
		}
		throw Error('Fill in all required fields')
	}
	if (admin !== 'admin') {
		throw Error('Unauthorized')
	}
	const target = await this.findOneAndUpdate({ email }, { role: role })
	if (!target) {
		throw Error('Invalid email')
	}
}

module.exports = mongoose.model('User', userSchema)
