const Tool = require('../models/toolModel.js')
const User = require('../models/userModel.js')
const mongoose = require('mongoose')

const getAllTool = async (req, res) => {
	const allTool = await Tool.find({}).sort({ nSaved: -1 })
	res.status(200).json(allTool)
}

const getTool = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such tool' })
	}

	const tool = await Tool.findById(id)
	if (!tool) {
		return res.status(404).json({ error: 'No such tool' })
	}
	res.status(200).json(tool)
}

const createTool = async (req, res) => {
	const { appName, createdBy } = req.body // required fields

	let emptyFields = []

	// any attribute required
	if (!appName) {
		emptyFields.push('appName')
	}
	if (!createdBy) {
		emptyFields.push('createdBy')
	}
	if (emptyFields.length > 0) {
		return res
			.status(400)
			.json({ error: 'Please fill in all the fields', emptyFields })
	}

	try {
		const tool = await Tool.createNewTool(req)
		res.status(200).json(tool)
	} catch (error) {
		res.status(400).json({ error: error.message, emptyFields })
	}
}

const deleteTool = async (req, res) => {
	const user_id = req.user._id
	const role = await User.findOne(user_id).select('role')
	const { id } = req.params
	if (role.role !== 'admin') {
		return res.status(401).json({ tool, error: 'Unauthorized' })
	}
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such tool' })
	}
	const tool = await Tool.findOneAndDelete({ _id: id })
	if (!tool) {
		return res.status(404).json({ error: 'No such tool' })
	}
	res.status(200).json(tool)
}

const updateTool = async (req, res) => {
	const user_id = req.user._id
	const role = await User.findOne(user_id).select('role')
	if (role.role !== 'admin') {
		return res.status(401).json({ error: 'Unauthorized' })
	}
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such tool' })
	}
	const tool = await Tool.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	)
	if (!tool) {
		return res.status(404).json({ error: 'No such tool' })
	}
	res.status(200).json(tool)
}

module.exports = {
	getAllTool,
	getTool,
	createTool,
	deleteTool,
	updateTool,
}
