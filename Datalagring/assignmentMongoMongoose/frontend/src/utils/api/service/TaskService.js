import http from '../TaskAPI'

const taskUrl = `/task`

const getAllTasks = () => {
    return http.get(taskUrl)
}

const createTask = (newTask) => {
    return http.post(taskUrl, newTask)
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

const toggleTaskDone = (id, payload) => {
    return http.put(`/toggleTaskDone/${id}`, payload)
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