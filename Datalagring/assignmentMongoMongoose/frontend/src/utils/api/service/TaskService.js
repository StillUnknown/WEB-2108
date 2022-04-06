import http from '../TaskAPI'

const taskUrl = `/task`
const tasksUrlById = `${taskUrl}/:userId`

const getAllTasks = () => {
    return http.get(taskUrl)
}

const createTask = (newName) => {
    return http.post(taskUrl, newName)
}

const updateTask = (_id, changedTask) => {
    return http.put(`/task/${_id}`, changedTask)
}

const deleteTask = (_id) => {
    return http.delete(`/task/${_id}`)
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