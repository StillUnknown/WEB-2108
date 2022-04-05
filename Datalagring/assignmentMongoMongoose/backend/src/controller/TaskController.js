import TaskModel from "../models/TaskModel.js";
import Logger from "../utils/Logger.js";
import StatusCode from "../configurations/StatusCode.js";


const createTask = async (req, res) => {
    Logger.http(req.body)

    const task = new TaskModel({
        task: req.body.task,
        name: req.body.name,
        isDone: false
    })
    Logger.debug(task)

    try {
        const response = await task.save()
        Logger.debug(response)
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}

const getAllTasks = async (req, res) => {

    try {
        const response = await TaskModel.find()
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}

const getTaskById = async (req, res) => {

    try {
        const response = await TaskModel.findById(req.params.userId)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error occurred while trying to retrieve user with id: ` + req.params.userId,
            error: error.message
        })
    }
}

const getTaskWithNameQuery = async (req, res) => {

    try {
        const response = await TaskModel.find({name: req.params.name})
        Logger.debug(response)
        response.length !== 0
            ? res.status(StatusCode.OK).send(response)
            : res.status(StatusCode.NOT_FOUND).send({message: `Could not find user with name: ` + req.params.name})
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to retrieve user with name: ` + req.params.userId,
            error: error.message
        })
    }
}

const updateTask = async (req, res) => {

    try {
        if (!req.body) {
            return res.status(StatusCode.BAD_REQUEST).send({message: `Cannot update empty values`})
        }
        const response = await TaskModel.findByIdAndUpdate(req.params.userId, {
            task: req.body.task,
            name: req.body.name,
        }, {new: true})
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error occurred while trying to update values of the user with ID: ` + req.params.userId,
            error: error.message
        })
    }
}

const deleteTask = async (req, res) => {

    try {
        const response = await TaskModel.findByIdAndDelete(req.params.userId)
        res.status(StatusCode.OK).send({
            message: `Successfully deleted the task: ${response.task} and name: ${response.name}`
        })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to delete the task with ID: ` + req.params.userId,
            error: error.message
        })
    }
}

const toggleTaskDone = (req, res) => {
    const _id = Number(req.params.userId)
    TaskModel[_id].isDone = !TaskModel[_id].isDone
    res.status(StatusCode.ACCEPTED).send(TaskModel[_id])
}

export default {
    createTask,
    getAllTasks,
    getTaskById,
    getTaskWithNameQuery,
    updateTask,
    deleteTask,
    toggleTaskDone
}