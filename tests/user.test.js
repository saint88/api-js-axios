const userClient = require('../src/clients/user_client')
const { faker } = require('@faker-js/faker')
const objTools = require('../src/utils/obj_utils')

describe('Positive test suite for user API', () => {

    beforeEach(() => {
        console.log('I am before fixture')
    })

    const userData = {
        "id": 0,
        "username": faker.internet.userName(),
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "email": faker.internet.email(),
        "password": faker.internet.password(),
        "phone": faker.phone.number('+7916#######'),
        "userStatus": 0
    }
    
    test('Add user', async () => {
        const user = (await userClient.add(userData)).data
        expect(user.code).toEqual(200)

        const createdUser = (await userClient.getUserByUsername(userData.username)).data
        expect(objTools.removeFn('id', createdUser)).toEqual(objTools.removeFn('id', userData))
    })
})