import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Middlewares from "./src/middlewares/Middlewares.js"
import Configuration from "./configuration/Configuration.js";
import bodyParser from "body-parser";


const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json)
app.use(helmet())
app.use(morgan('common'))

app.get('/recipe', (req, res) => {
    res.send('Pancakes')
})


app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)