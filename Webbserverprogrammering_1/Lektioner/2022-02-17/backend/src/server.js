import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const port = process.env.SERVER_PORT
const app = express()

const cors_options = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}

app.use(cors(cors_options))

app.get('/', (req, res) => {
    res.send(`API is Alive på port ${port}`)
})

app.listen(port, () => {
    console.log(`Server running on address:port http://localhost:${port}`)
})