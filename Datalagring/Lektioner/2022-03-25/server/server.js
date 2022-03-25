import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import Middlewares from "./src/middlewares/Middlewares.js"
import mongoose from 'mongoose'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(helmet())
app.use(morgan('common'))

app.get('/recipe', (req, res) => {
    res.send('Pancakes')
})

app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

mongoose.connect('mongodb://localhost/arastotutorial', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Successfully connected to database'))
    .catch((error) => {
        console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE:', error)
        process.exit()
    })

app.listen(port, () => {
    console.log(`Servern är igång på port ${port}`)
})