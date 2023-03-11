const template = require('../schemas/template')
// Actions for this specific Schema
const getAll_ = async () => {
	try {
		return await template.find()
	} catch (error) {
		console.error(error)
		return null
	}
}

const getOne_ = async (data) => {
	try {
		return await template.findOne({ text: data })
	} catch (error) {
		console.error(error)
		return null
	}
}

const postOne_ = async (data) => {
	try {
		return await template.create({ text: data })
	} catch (error) {
		console.error(error)
		return null
	}
}

module.exports = { getAll_, getOne_, postOne_ }
