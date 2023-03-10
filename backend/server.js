require('dotenv').config({ path: './.env' })

const express = require('express')
const mongoose = require('mongoose')
const toolsRoutes = require('./routes/toolsRoutes')
const usersRoutes = require('./routes/usersRoutes')
const cors = require('cors')

const app = express()
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

app.use(
	cors({
		origin:
			process.env.NODE_ENV == 'PRODUCTION'
				? 'https://nicholasyan.site'
				: 'http://localhost:3000',
		optionsSuccessStatus: 200,
	})
)
app.use(express.json())
app.use('/mern/user/', usersRoutes)
app.use('/mern/tools/', toolsRoutes)

mongoose.set('strictQuery', false)
mongoose
	.connect(process.env.mongoURI)
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT || 4000, () => {
			console.log(
				'connected to db and listening on port',
				process.env.PORT || 4000
			)
		})
	})
	.catch((error) => {
		console.log(error)
	})
