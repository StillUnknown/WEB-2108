import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const port = process.env.SERVER_PORT
const allowedRequestOrigins = '*'
const allowedRequestMethods = ['GET', 'POST', 'PUT', 'DELETE']

const cors_options = {
    origin: allowedRequestOrigins,
    methods: allowedRequestMethods
}
const app = express()

app.use(cors(cors_options))
app.use(express.json())

const userDatabase = [
    {
        name: 'Aram',
        age: 30,
        gender: 'Male'
    },
    {
        name: 'Bengtina',
        age: 19,
        gender: 'female'
    },
    {
        name: 'Carin',
        age: 29,
        gender: 'female'
    },
    {
        name: 'Emil',
        age: 32,
        gender: 'Male'
    }
]

const userNames = () => {
    const names = []
    userDatabase.forEach(user => {
        names.push({
            name: user.name
        })
    })
    return names
}

const getUserByName = (name) => {
    let object = `Could not find ${name} in database`
    userDatabase.forEach(user => {
        if (name === user.name) {
            object = user
        }
    })
    return object
}

const updateUserByName = (name, newName, age, gender) => {
    let object = `Could not find ${name} in database`
    userDatabase.forEach(user => {
        if (name === user.name) {
            user.name = newName
            user.age = age
            user.gender = gender
            object = user
        }
    })
    return object
}

app.post('/user', (req, res) => {
    const {name, age, gender} = req.body
    const newObject = {
        name: name,
        age: age,
        gender: gender
    }
    userDatabase.push(newObject)
    res.status(201).send(userDatabase)
})

app.get('/users', (req, res) => {
    res.send(userDatabase)
})

app.get('/users/name', (req, res) => {
    const responseFromDb = userNames()
    res.send(responseFromDb)
})

app.get('/user/:name', (req, res) => {
    const name = req.params.name
    const responseFromDb = getUserByName(name)
    res.send(responseFromDb)
})

app.put('/user', (req, res) => {
    const {name, newName, age, gender} = req.body
    const response = updateUserByName(name, newName, age, gender)

    res.status(202).send(response)
})

app.get('/', (req, res) => {
    res.send(`API is Alive på port ${port}`)
})

app.listen(port, () => {
    console.log(`Server running on address:port http://localhost:${port}`)
})