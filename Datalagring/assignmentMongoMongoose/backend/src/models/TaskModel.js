import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const dbCollection = process.env.MONGODB_COLLECTION

const TaskSchema = new mongoose.Schema({
    task: String,
    name: String,
    isDone: false
}, {
    timestamps: true
})

const TaskModel = new mongoose.model(dbCollection, TaskSchema)

export default TaskModel