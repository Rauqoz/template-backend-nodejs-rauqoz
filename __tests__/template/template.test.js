// Supertest for simulate backend
const request = require('supertest')
const app = require('../../server/server')

describe('Template test e2e', () => {
	test('Should response status code 200 main route', async () => {
		const response = await request(app).get('/')
		expect(response.statusCode).toEqual(200)
	})
	test('Should response status code 200 version route', async () => {
		const response = await request(app).get('/version')
		expect(response.statusCode).toEqual(200)
	})
})
