import TaskController from "../controller/TaskController.js";

// Endpoint +Business Logic and CRUD Operations
const taskRoutes = (app) => {

    const taskUrl = `/task`
    const tasksUrlById = `${taskUrl}/:userId`
    const searchTask = `/searchTask?name=`

    app.post(taskUrl, TaskController.createTask)
    app.get(taskUrl, TaskController.getAllTasks)
    app.get(tasksUrlById, TaskController.getTaskById)
    app.get(searchTask, TaskController.getTaskWithNameQuery)
    app.put(tasksUrlById, TaskController.updateTask)
    app.delete(tasksUrlById, TaskController.deleteTask)
    app.put(`/toggleTaskDone/:id`, TaskController.toggleTaskDone)
}

export default {
    taskRoutes
}