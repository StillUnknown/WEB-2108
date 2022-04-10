import TaskController from "../controller/TaskController.js";

// Endpoint +Business Logic and CRUD Operations
const taskRoutes = (app) => {
    const taskUrl = `/task`
    const tasksUrlById = `${taskUrl}/:id`
    const searchTask = `/searchTask/:name`
    const toggleTaskDone = '/toggleTaskDone/:id'

    app.post(taskUrl, TaskController.createTask)
    app.get(taskUrl, TaskController.getAllTasks)
    app.get(tasksUrlById, TaskController.getTaskById)
    app.get(searchTask, TaskController.getTaskWithNameQuery)
    app.put(tasksUrlById, TaskController.updateTask)
    app.delete(tasksUrlById, TaskController.deleteTask)
}

export default {
    taskRoutes
}