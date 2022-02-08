// const express = require('express')
import express from 'express'

const port = 3001
const app = express()

app.get('/', (req, res) => {
    res.send('API Alive')
})

app.listen(3001, () => {
    console.log(`Server listening on port: http://localhost:${port}`)
})