import http from '../TaskAPI'

const taskUrl = `/task`
const tasksUrlById = `${taskUrl}/:userId`
const searchTask = `/searchTask`

const getAllTasks = () => {
    return http.get(taskUrl)
}

const createTask = () => {
    return http.post(taskUrl)
}

const updateTask = (_id) => {
    return http.put(tasksUrlById)
}

const deleteTask = (_id) => {
    return http.delete(tasksUrlById)
}

const getTaskById = (_id) => {
    return http.get(tasksUrlById)
}

const getTaskWithNameQuery = () => {
    return http.get(searchTask)
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