const request = require('supertest')
const app = require('../../server')
const userServices = require('../../services/UserServices')
const dbHandler = require('../db-handler')

const agent = request.agent(app) // aquí estoy simulando mi servidor

beforeAll(async () => await dbHandler.connect())
//antes de los test ejecuta esto

afterEach(async () => await dbHandler.clearDatabase())
//antes de cada test ejecuta esto

afterAll(async () => await dbHandler.closeDatabase())
// despues de todos los test ejecuta esto

describe('UserController', () => {
    
    it('Esto debe devolver usuarios', async() => {
        const mockUser1 = {
            name: "test user",
            email: "testuser1@hotmail.com",
            password: "test"
        }
    
        const mockUser2 = {
            name: "test user",
            email: "testuser2@hotmail.com",
            password: "test"
        }

        await userServices.createUser(mockUser1)
        await userServices.createUser(mockUser2)

        const response = await agent.get('/users').expect(200)
    
        expect(response.body).toHaveLength(2)
        expect(response.body[0]._id).toBeTruthy()
            
    })
})