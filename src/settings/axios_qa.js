const axios = require('axios').default;

const axios_qa = axios.create({
    baseURL: 'https://svyatoj1988.flowfast.io/.flowfast.io/api/latest',
    headers: {
        'Authorization': '1234566788654'
    }
})

module.exports = axios_qa