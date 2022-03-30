import express from 'express'
import dotenv from 'dotenv'
import helmet from "helmet"
import morgan from 'morgan'
import Middlewares from "./middlewares/Middlewares.js"
import Configurations from "./configurations/Configurations.js"
import TaskRoutes from "./routes/TaskRoutes.js"
import ApplyMiddlewares from "./configurations/ApplyMiddlewares.js"
import AliveRoute from "./routes/AliveRoute.js";


dotenv.config()
const app = express()

ApplyMiddlewares.ApplyMiddlewares
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('common'))

AliveRoute.aliveRoute(app)
TaskRoutes.taskRoutes(app)
app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configurations.connectToDatabase(app)
Configurations.connectToPort(app)

export default app