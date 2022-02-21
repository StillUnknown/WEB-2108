import http from './MyAPI'

const Alive = () => {
    return http.get('/')
}

const List = () => {
    return http.post('/list')
}

export default {
    Alive,
    List,
}