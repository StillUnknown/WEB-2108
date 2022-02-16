import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.SERVER_PORT
const app = express()

const options = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(options))

app.get('/', (req, res) => {
    res.send('API IS ALIVE')
})

app.post('/name/:input', (req, res) => {
    const input = req.params.input
    res.send(`Your name is: ${input}`)
})

app.post('/calc/add/:num1/:num2', (req, res) => {
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 + number2
    res.send(`Summan av talen ${number1} + ${number2} är = ${sum}`)
})

app.post('/name/:forename/:lastname', (req, res) => {
    let forename = req.params.forename
    let lastname = req.params.lastname
    res.send(`Mitt namn är: ${forename} ${lastname}`)
})

app.post('/calc/sub/:num1/:num2', (req,res ) => {
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 - number2
    res.send(`Differensen av talen ${number1} - ${number2} är = ${sum}`)
})

app.post('/calc/multi/:num1/:num2', (req, res) => {
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 * number2
    res.send (`Produkten av talen ${number1} * ${number2} är = ${sum}`)
})

app.post('/calc/div/:num1/:num2', (req, res) => {
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 / number2
    res.send(`Kvoten av talen ${number1} / ${number2} är = ${sum}`)
})

app.post('/array', (req, res) => {
    let array = ['Michaela, Christoffer, Aram']
    res.send(`Array = ${array}`)
})

app.listen(port)