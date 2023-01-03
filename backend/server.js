require('dotenv').config({ path: './.env' })

const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

app.use(express.json())
app.use('/api/software/', softwareRoutes)

mongoose.set('strictQuery', false)
mongoose
	.connect(process.env.mongoURI)
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT, () => {
			console.log('connected to db and listening on port', process.env.PORT)
		})
	})
	.catch((error) => {
		console.log(error)
	})
