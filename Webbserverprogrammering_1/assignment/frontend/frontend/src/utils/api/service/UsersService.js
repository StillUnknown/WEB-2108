import http from "../UsersAPI";

const ToDoList = () => {
    return http.get('/users')
}

export default {
    ToDoList
}