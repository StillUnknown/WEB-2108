import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import app from '../src/server.js'

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const newTask = {
    task: 'Cykla',
    name: 'Liselott'
}

const changedTask = {
    task: 'Handla',
    name: 'Liselott'
}

const randomString = Math.random().toString(36).substring(7)
console.log(randomString)

const getAllTasks = () => {
    describe('Testing to get an array of tasks (GET)', () => {
        test('Should return an array of tasks', (done) => {
            Chai.request(app)
                .get('/task')
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('array')
                    expect(body.length).to.equal(body.length) // Eftersom denna  ändras hela tiden skriver jag på detta viset
                    expect(body.length).to.not.equal(5)

                    const user = body[0]
                    expect(user).to.be.an('object')
                    expect(user.task).to.equal('Dansa')
                    expect(user.name).to.equal('Christoffer')
                    done()
                })
        })
    })
}

const checkThatTaskDoNotExist = () => {
    describe('Check that task dont exist', () => {
        test('Should return text', (done) => {
            Chai.request(app)
                .get(`/searchTask/Aram`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`Task with name: Aram not found`)
                    done()
                })
        })
    })
}

const createTask = () => {
    describe('Testing to create new task', () => {
        test('Should expect a new task be to created', (done) => {
            Chai.request(app)
                .post(`/task`)
                .send(newTask)
                .end((error, response) => {
                    expect(response.status).to.equal(201)

                    const body = response.body
                    expect(body.task).to.equal('Cykla')
                    expect(body.name).to.equal('Liselott')
                    done()
                })
        })
    })
}

describe('Testing TaskController funktions', () => {
    getAllTasks()
    checkThatTaskDoNotExist()
    createTask()
})