import TaskModel from "../models/TaskModel.js";
import Logger from "../utils/Logger.js";
import StatusCode from "../configurations/StatusCode.js";
import dotenv from 'dotenv'

const database = process.env.MONGODB_COLLECTION

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
                    error: `Error getting task`
                })
            } else {
                Logger.info(task)
                res.status(StatusCode.OK).send(task ? task : {
                    message: `User with id: ${req.params.userId} not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error getting task`
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
                res.status(StatusCode.OK).send(task.length > 0 ? task :
                    {message: `User with name: ${req.params.name} not found`})
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
        Logger.debug(req.params.userId)
        Logger.debug(updatedTask)
        TaskModel.findByIdAndUpdate(req.params.userId, updatedTask, {new: true}, (error, task) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error updating task with id: ${req.params.userId}`
                })
            } else {
                Logger.info(task)
                res.status(StatusCode.OK).send(task ? task : {
                    message: `User with id: ${req.params.userId} not found`
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
        TaskModel.findByIdAndRemove(req.params.userId, (error, task) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error deleting task`
                })
            } else {
                Logger.info(task)
                res.status(StatusCode.OK).send(
                    task ?
                        {
                            message: `User with id: ${req.params.userId} was deleted from database`
                        } :
                        {
                            message: `Task with id: "${req.params.userId}" not found`
                        })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error deleting task`
        })
    }
}

export default {
    createTask,
    getAllTasks,
    getTaskById,
    getTaskWithNameQuery,
    updateTask,
    deleteTask,
}