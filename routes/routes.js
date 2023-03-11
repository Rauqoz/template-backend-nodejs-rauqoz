// Module Router from Express
const routes = require('express').Router()

// If you need use the mongodb services
// const { getAll_, getOne_, postOne_ } = require('../mongodb/services/template.service')

// Routes
routes.get('/', (req, res) => {
	res.status(200).send(true)
})

routes.get('/version', (req, res) => {
	res.status(200).send("version 1.0.0")
})

module.exports = routes
