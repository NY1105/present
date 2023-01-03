const express = require('express')
const {
	createTool,
	getAllTool,
	getTool,
	deleteTool,
	updateTool,
} = require('../controllers/toolController')
// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// router.use(requireAuth)

router.get('/', getAllTool)

router.get('/:id', getTool)

router.post('/', createTool)

router.delete('/:id', deleteTool)

router.patch('/:id', updateTool)

module.exports = router
