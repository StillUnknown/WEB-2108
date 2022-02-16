import Axios from 'axios'

const myAPI = Axios.create({
    baseURL: 'http://localhost:3001'
})

export default myAPI