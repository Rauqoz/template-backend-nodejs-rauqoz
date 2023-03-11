// If you need use this please use "npm i mongoose"
const mongoose = require('mongoose')

// Connection
const mongoDb = mongoose
	.connect(process.env.MONGO_DB)
	.then(() => console.log('Connected to atlas'))
	.catch((err) => console.log(`Error: ${err}`))

module.exports = mongoDb
