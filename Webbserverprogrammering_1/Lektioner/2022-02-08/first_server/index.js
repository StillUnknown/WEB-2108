const express = require('express')

const port = 3001
const app = express()

app.get('/', (req, res) => {
    console.log('GET Method')
    res.send(`Välkommen till mitt API på: ${port}!`)
})

app.post('/', (req, res) => {
    console.log('POST Method')
    res.send('Got a POST request')
})

app.put('/', (req, res) => {
    console.log('PUT Method')
    res.send('Got a PUT request')
})

app.delete('/', (req, res) => {
    console.log('DELETE Method')
    res.send('Got a DELETE request')
})

app.listen(3001, () => {
    console.log(`Server running on port https://localhost:${port}`)
})

