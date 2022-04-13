import TaskModel from "../models/TaskModel.js";
import Logger from "../utils/Logger.js";
import StatusCode from "../configurations/StatusCode.js";

const createTask = async (req, res) => {
    Logger.info(`createTask()`)
    Logger.http(req.body)

    const {task, name} = req.body
    if (task && name) {
        const newTask = {
            task: task,
            name: name,
            isDone: false
        }
        Logger.debug(newTask)

        try {
            const task = new TaskModel(newTask)
            const response = await task.save()
            Logger.debug(response)
            res.status(StatusCode.CREATED).send(response)
        } catch (error) {
            Logger.error(error)
            res.status(StatusCode.BAD_REQUEST).send({error: Error`Error creating new task`})
        }
    } else {
        Logger.error(error)
        res.status(StatusCode.NO_CONTENT).send(`No body found`)
    }
}

const getAllTasks = async (req, res) => {

    try {
        TaskModel.find({}, (error, tasks) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({error: `Error retrieving tasks`})
            } else {
                Logger.info(tasks)
                res.status(StatusCode.OK).send(tasks)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({error: `Error getting tasks`})
    }
}

const getTaskById = async (req, res) => {

    try {
        TaskModel.findById(req.params.id, (error, task) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error getting task if`
                })
            } else {
                Logger.info(task)
                res.status(StatusCode.OK).send(task ? task : {
                    message: `Task with id: ${req.params.id} not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error getting task catch`
        })
    }
}

const getTaskWithNameQuery = async (req, res) => {

    try {
        TaskModel.find({name: req.params.name}, (error, task) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error getting task`
                })
            } else {
                Logger.info(task)
                res.status(StatusCode.OK).send(task.length > 0 ? task : [{
                    message: `Task with name: ${req.params.name} not found`
                }])
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error getting task`
        })
    }
}

const updateTask = async (req, res) => {

    try {
        const updatedTask = {
            task: req.body.task,
            name: req.body.name
        }
        Logger.debug(req.params.id)
        Logger.debug(updatedTask)
        TaskModel.findByIdAndUpdate(req.params.id, updatedTask, {new: true}, (error, task) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send([{
                    error: `Could not find task with id: ${req.params.id}`
                }])
            } else {
                Logger.info(task)
                res.status(StatusCode.ACCEPTED).send(task ? task : {
                    message: `Task with id: ${req.params.id} not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error updating task`
        })
    }
}

const deleteTask = async (req, res) => {

    try {
        TaskModel.findByIdAndRemove(req.params.id, (error, task) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error deleting task`
                })
            } else {
                Logger.info(task)
                res.status(StatusCode.OK).send(
                    task ?
                        `Task with id: ${req.params.id} was deleted from database`
                        :
                        `Task with id: ${req.params.id} not found`
                )
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error deleting task`
        })
    }
}

const toggleTaskDone = (req, res) => {

    try {
        const {id} = req.params
        const {newTaskStatus} = req.body
        const returnUpdatedObject = {
            new: true
        }
        const Query = {
            isDone: newTaskStatus
        }
        TaskModel.findByIdAndUpdate(id, Query, returnUpdatedObject, (error, task) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error changing isDone`
                })
            } else {
                res.status(StatusCode.OK).send(task.isDone)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error updating isDone`
        })
    }
}

// const toggleTaskDone = (req, res) => {
//     const _id = Number(req.params.id)
//     Task_database.tasks[_id].isDone = !Task_database.tasks[_id].isDone
//     res.status(202).send(Task_database.tasks[_id])
// }

export default {
    createTask,
    getAllTasks,
    getTaskById,
    getTaskWithNameQuery,
    updateTask,
    deleteTask,
    toggleTaskDone
}