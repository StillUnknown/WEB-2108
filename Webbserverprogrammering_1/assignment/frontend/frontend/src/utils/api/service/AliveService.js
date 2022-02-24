import http from '../UsersAPI'

const alive = () => {
    return http.get('/')
}

export default {
    alive,
}