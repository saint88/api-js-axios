const axios = require('../settings/axios_qa')

const userClient = {
    add: (user) => {
        return axios.post('/user', user)
    },
    getUserByUsername: (username) => {
        return axios.get(`/user/${username}`)
    }
}

module.exports = userClient