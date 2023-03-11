// Module Router from Express
const routes = require('express').Router()
// Module FileSystem and Path
const fs = require('fs')
const yaml = require('js-yaml')
const path = require('path')
// Module Swagger
const swaggerIU = require('swagger-ui-express')
// File .yaml
const swaggerFile = yaml.load(fs.readFileSync(path.join(__dirname, "./swagger.yaml"), 'utf8'))
// End-Point
const swaggerDoc = routes.use('/api-doc', swaggerIU.serve, swaggerIU.setup(swaggerFile))

module.exports = swaggerDoc