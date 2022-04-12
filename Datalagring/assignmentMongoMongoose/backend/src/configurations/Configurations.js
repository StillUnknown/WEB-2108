import Logger from "../utils/Logger.js"
import dotenv from 'dotenv'
import mongoose from "mongoose"

dotenv.config()

const port = process.env.SERVER_PORT
const environment = process.env.ENVIRONMENT
const mongodb_url = process.env.MONGODB_URL
const dbName = process.env.MONGODB_DB_NAME

const isServerInDevOrProdMode = () => {
    const denEnv = 'development'
    const env = environment || denEnv
    const isDevelopment = env === denEnv
    if (isDevelopment) {
        Logger.warn(`SERVER IS IN DEVELOPMENT MODE!`)
    }
}

const connectToPort = (app) => {
    app.listen(port, () => {
        isServerInDevOrProdMode()
        Logger.info(`Server started at http://localhost:${port}`)
    })
}

const connectToDatabase = async (app) => {
    const uri = mongodb_url + dbName
    try {
        await mongoose.connect(uri)
        Logger.info(`You have successfully connected to the Database`)
    } catch (error) {
        Logger.error(`ERROR OCCURRED WHILE CONNECTING TO DB`, error)
        process.exit()
    }
}

export default {
    connectToPort,
    connectToDatabase
}