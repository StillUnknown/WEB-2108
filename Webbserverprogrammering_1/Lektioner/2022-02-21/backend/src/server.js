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

app.get('/', (req, res) => {
    res.send('API is Alive')
})

app.post('/calc/add/:numOne/:numTwo', (req, res) => {
    let num1 = Number(req.params.numOne)
    let num2 = Number(req.params.numTwo)
    let sum = num1 + num2
    res.send(`Summan av talen ${num1} + ${num2} = ${sum}`)
})

app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT: http://localhost:${port}`)
})