import http from '../TaskAPI'

const taskUrl = `/task`
const tasksUrlById = `${taskUrl}/:userId`

const getAllTasks = () => {
    return http.get(taskUrl)
}

const createTask = (newName) => {
    return http.post(taskUrl, newName)
}

const updateTask = (_id) => {
    return http.put(tasksUrlById)
}

const deleteTask = (_id) => {
    return http.delete(tasksUrlById)
}

const getTaskById = (_id) => {
    return http.get(`/task/${_id}`)
}

const getTaskWithNameQuery = (name) => {
    return http.get(`/searchTask/${name}`)
}

const toggleTaskDone = (_id) => {
    return http.put(`/toggleTaskDone/${_id}`)
}

export default {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTaskById,
    getTaskWithNameQuery,
    toggleTaskDone
}