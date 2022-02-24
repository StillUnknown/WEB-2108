import Axios from 'axios'

const UsersAPI = Axios.create({
    baseURL: 'http://localhost:3001'
})

export default UsersAPI