const mongoose = require('mongoose')

const Schema = mongoose.Schema

const toolSchema = new Schema(
	{
		appName: {
			type: String,
			required: true,
		},
		appProviderName: {
			type: String,
		},
		appOfficialSiteURL: {
			type: String,
		},
		appTags: [String], 
		appDescription: {
			type: String,
		},
		appRequirements: {
			type: String,
		},
		nVisit: {
			type: Number,
		},
		nSaved: {
			type: Number,
		},
		createdBy: {
			type: String,
			// required: true,
		},
	},
	{ timestamps: true }
)

toolSchema.path('appOfficialSiteURL').validate((val) => {
	urlRegex =
		/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
	return urlRegex.test(val)
}, 'Invalid URL.')

module.exports = mongoose.model('Tool', toolSchema)
