import http from '../TaskAPI'

const taskUrl = `/task`

const getAllTasks = () => {
    return http.get(taskUrl)
}

const createTask = (newName) => {
    return http.post(taskUrl, newName)
}

const updateTask = (id, changedTask) => {
    return http.put(`/task/${id}`, changedTask)
}

const deleteTask = (id) => {
    return http.delete(`/task/${id}`)
}

const getTaskById = (id) => {
    return http.get(`/task/${id}`)
}

const getTaskWithNameQuery = (name) => {
    return http.get(`/searchTask/${name}`)
}

const toggleTaskDone = (id) => {
    return http.put(`/toggleTaskDone/${id}`)
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