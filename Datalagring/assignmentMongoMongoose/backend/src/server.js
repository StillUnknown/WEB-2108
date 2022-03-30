import express from 'express'
import dotenv from 'dotenv'
import helmet from "helmet"
import morgan from 'morgan'
import Middlewares from "./middlewares/Middlewares.js"
import Configurations from "./configurations/Configurations.js"
import TaskRoutes from "./routes/TaskRoutes.js"
import AliveController from "./controller/AliveController.js"
import ApplyMiddlewares from "./configurations/ApplyMiddlewares.js"

dotenv.config()
const app = express()

app.use(ApplyMiddlewares.ApplyMiddlewares)
app.use(helmet())
app.use(express.urlencoded())
app.use(morgan('common'))

AliveController.alive(app)
TaskRoutes.taskRoutes(app)
app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configurations.connectToDatabase(app)
Configurations.connectToPort(app)

export default app