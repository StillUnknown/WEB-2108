import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import app from '../src/server.js'

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)
console.log(randomString)

const newTask = {
    task: Cykla,
    name: Liselott
}

const changedTask = {
    task: Bada,
    name: Liselott
}

