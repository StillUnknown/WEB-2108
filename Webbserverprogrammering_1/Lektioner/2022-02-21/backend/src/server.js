import express from 'express'
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config()

const port = process.env.SERVER_PORT
const cors_option = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', ]
}

const app = express()

app.use(cors(cors_option))
app.use(express.json())

const toDo = ['Michaela, Christoffer']

app.get('/', (req, res) => {
    res.send('API is Alive')
})

app.post('/list', (req, res) => {
    res.send(toDo)
})

app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT: http://localhost:${port}`)
})