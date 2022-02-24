import http from "../TaskAPI";

const ToDoList = () => {
    return http.get('/users')
}

export default {
    ToDoList
}