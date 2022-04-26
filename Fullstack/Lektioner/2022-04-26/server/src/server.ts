import express from 'express'
import Configuration from "./configurations/Configuration";
import Middleware from "./middlewares/Middleware";
import Logger from "./utils/Logger";
import AliveRoutes from "./routes/AliveRoutes";
import UserRoutes from "./routes/UserRoutes";

const server = express()
Middleware.applyMiddlewares(server)

AliveRoutes(server)

UserRoutes(server)

Middleware.errorHandlerAndNotFound(server)

Configuration.connectToPort(server)
Configuration.connectToDatabase().then(() => {
    Logger.debug('--= lolz =--')
})

export default server