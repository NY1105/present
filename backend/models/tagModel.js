const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tagSchema = new Schema({
	tagName: {
		type: String,
		required: true,
	},
	nApps: {
		type: Number,
	},
	//TODO: Add contained apps
})

module.exports = mongoose.model('Tags', tagSchema)
