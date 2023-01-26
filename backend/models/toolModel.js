const mongoose = require('mongoose')

const Schema = mongoose.Schema

const toolSchema = new Schema(
	{
		appName: {
			type: String,
			required: true,
			unique: true,
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
		appLogo: {
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
			required: true,
		},
	},
	{ timestamps: true }
)

toolSchema.path('appOfficialSiteURL').validate((val) => {
	urlRegex =
		/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
	return urlRegex.test(val)
}, 'Invalid URL.')

toolSchema.statics.createNewTool = async function (req) {

	const { appName, createdBy } = req.body // FIXME:
	
	const exists_appName = await this.findOne({ appName })
	if (exists_appName) {
		throw Error('appName already in use')
	}
	const tool = await this.create({
		appName: appName,
		createdBy: createdBy,
		...req.body,
	})
	return tool
}

module.exports = mongoose.model('Tool', toolSchema)
