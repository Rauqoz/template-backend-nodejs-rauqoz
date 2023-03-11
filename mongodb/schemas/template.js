const mongoose = require('mongoose')
// Schema for the Data
const template = mongoose.Schema({
	text: {
		type: String,
		require: true,
	},
})

module.exports = mongoose.model('template_example', template)
