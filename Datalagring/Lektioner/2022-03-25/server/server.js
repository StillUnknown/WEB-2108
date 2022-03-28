import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Middlewares from "./src/middlewares/Middlewares.js"
import Configuration from "./configuration/Configuration.js"
import UserRoutes from './src/routes/User.routes.js'

const app = express()
app.use(express.json());
app.use(express.urlencoded());
app.use(helmet())
app.use(morgan('common'))

app.get('/recipe', (req, res) => {
    res.send('Pancakes')
})

UserRoutes.routes(app)
app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configuration.connectToDatabase(app)
Configuration.connectToPort(app)