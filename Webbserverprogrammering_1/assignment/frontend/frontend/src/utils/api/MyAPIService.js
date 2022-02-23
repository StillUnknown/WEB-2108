import http from './MyAPI'

const Alive = () => {
    return http.get('/')
}

const ToDoList = () => {
    return http.get('/users')
}

export default {
    Alive,
    ToDoList,
}