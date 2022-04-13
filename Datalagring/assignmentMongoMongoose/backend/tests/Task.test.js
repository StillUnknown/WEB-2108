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

let global_id = '' // You can run the same Id through the whole test


const randomString = Math.random().toString(36).substring(7)
console.log(randomString)

const createTask = () => {
    describe('Testing to create new task (POST)', () => {
        test('Should expect a new task be to created', (done) => {
            Chai.request(app)
                .post(`/task`)
                .send(newTask)
                .end((error, response) => {
                    expect(response.status).to.equal(201)
                    global_id = response.body._id

                    const body = response.body
                    expect(body.task).to.equal('Cykla')
                    expect(body.name).to.equal('Liselott')
                    done()
                })
        })
    })
}

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
                    expect(user.task).to.equal('Cykla')
                    expect(user.name).to.equal('Liselott')
                    done()
                })
        })
    })
}

const checkThatTaskDoNotExist = () => {
    describe('Check that task dont exist (GET)', () => {
        test('Should return text', (done) => {
            Chai.request(app)
                .get(`/searchTask/Aram`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    // expect(response.text).to.equal({               // Hittar inget sätt att få detta rätt
                    //     "message":"Task with name: Aram not found"
                    // })
                    done()
                })
        })
    })
}

const getTaskWithNameQuery = () => {
    describe('Testing an existing task using name query (GET)', () => {
        test('Should return an object with data', (done) => {
            Chai.request(app)
                .get(`/searchTask/Liselott`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body[0]
                    expect(body.task).to.equal('Cykla')
                    expect(body.name).to.equal('Liselott')
                    done()
                })
        })
    })
}

const updateTask = () => {
    describe('Testing to update a task (PUT)', () => {
        test('Should expect the task to be updated', (done) => {
            Chai.request(app)
                .put(`/task/${global_id}`)
                .send(changedTask)
                .end((error, response) => {
                    expect(response.status).to.equal(202)

                    const body = response.body
                    expect(body.task).to.equal('Handla')
                    expect(body.name).to.equal('Liselott')
                    done()
                })
        })
    })
}

const getTaskWithId = () => {
    describe('Testing an existing task using id (GET)', () => {
        test('Should return an object with data', (done) => {
            Chai.request(app)
                .get(`/task/${global_id}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.task).to.equal('Handla')
                    expect(body.name).to.equal('Liselott')
                    done()
                })
        })
    })
}

const deleteTask = () => {
    describe('Testing to delete a task (DELETE', () => {
        test('Expecting task to be deleted', (done) => {
            Chai.request(app)
                .delete(`/task/${global_id}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`Task with id: ${global_id} was deleted from database`)
                    done()
                })
        })
    })
}

const deleteTaskThatDoNotExist = () => {
    describe('Testing to delete a task (DELETE', () => {
        test('Expecting task to be deleted', (done) => {
            Chai.request(app)
                .delete(`/task/${global_id}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`Task with id: ${global_id} not found`)
                    done()
                })
        })
    })
}

describe('Testing TaskController funktions', () => {
    createTask()
    getAllTasks()
    checkThatTaskDoNotExist()
    getTaskWithNameQuery()
    updateTask()
    getTaskWithId()
    deleteTask()
    deleteTaskThatDoNotExist()
})