import http from '../TaskAPI'

const alive = () => {
    return http.get('/')
}

export default {
    alive,
}