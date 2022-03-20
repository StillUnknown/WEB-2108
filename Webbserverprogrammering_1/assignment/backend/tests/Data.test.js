import Chai from 'chai'
import ChaiHTTP from "chai-http";
import {describe, it} from 'mocha'
import app from '../src/server.js'

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const newUser = {
    name: "Michaela",
    task: "Dance"
}

const updatedUser = {
    name: "Michaela",
    newName: "Aram",
    task: "Dance"
}

const allData = () => {
    describe('Testing to get an array of all data (GET)', () => {
        it('should expect an array of data to be returned', (done) => {
            Chai.request(app)
                .get('/alldata')
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('array')
                    expect(body.length).to.equal(4)
                    expect(body.length).to.not.equal(3)
                    expect(body.length).to.not.equal(5)

                    const user = body[0]
                    expect(user).to.be.an('object')
                    expect(user.name).to.equal('Christoffer')
                    expect(user.task).to.equal('Shop groceries')
                    done()
                })
        })
    })
}

const getUserNames = () => {
    describe('Testing to get an array of names (GET)', () => {
        it('should expect an array of names to be returned', (done) => {
            Chai.request(app)
                .get('/getusernames/name')
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('array')
                    expect(body.length).to.equal(4)
                    expect(body.length).to.not.equal(3)
                    expect(body.length).to.not.equal(5)

                    let user = body[0]
                    expect(user).to.be.an('object')
                    expect(user.name).to.equal('Christoffer')

                    user = body[1]
                    expect(user.name).to.equal('Liselott')
                    done()
                })
        })
    })
}

const getUserByName = () => {
const name = 'Christoffer'
    describe('Testing to get data by name (GET)', () => {
        it('should expect an object to be returned', (done) => {
            Chai.request(app)
                .get(`/getuserbyname/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal('Christoffer')
                    expect(body.task).to.equal('Shop groceries')
                    done()
                })
        })
    })
}

const checkIfUserDoNotExist = (name) => {
    describe('Test that get correct response with non existing name (GET)', () => {
        it('should get a response that says name dont exist', (done) => {
            Chai.request(app)
                .get(`/getuserbyname/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`Could not find "${name}" in database`)
                    done()
                })
        })
    })
}

const createTask = () => {
    describe('Testing to create new data (POST)', () => {
        it('should expect new data to be created', (done) => {
            Chai.request(app)
                .post('/createtask')
                .send(newUser)
                .end((error, response) => {
                    expect(response.status).to.equal(201)

                    const body = response.body
                    expect(body.name).to.equal(newUser.name)
                    expect(body.task).to.equal(newUser.task)
                    expect(body.isDone).to.equal(false)
                    done()
                })
        })
    })
}

const checkIfUserExist = (name) => {
    describe('Testing to check that created data exist', () => {
        it('should expect an object with data to be returned', (done) => {
            Chai.request(app)
                .get(`/getuserbyname/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal(newUser.name)
                    expect(body.task).to.equal(newUser.task)
                    done()
                })
        })
    })
}

const updateUserByName = () => {
    describe('Testing to update data by name (PUT)', () => {
        it('should get object with updated data', (done) => {
            Chai.request(app)
                .put(`/updatedatabyname`)
                .send(updatedUser)
                .end((error, respond) => {
                    expect(respond.status).to.equal(202)

                    const body = respond.body
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal(updatedUser.newName)
                    expect(body.task).to.equal(updatedUser.task)
                    done()
                })
        })
    })
}

const deletedatabyname = (name) => {
    describe('Testing to delete updated data (DELETE)', () => {
        it('should get a response that name was deleted from database', (done) => {
            Chai.request(app)
                .delete(`/deletedatabyname/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`User with name: "${ name }" was deleted from database!`)
                    done()
                })
        })
    })
}

const deletedataThatDontExist = (name) => {
    describe('Testing to delete updated data (DELETE)', () => {
        it('should get a response that name dont exist in database', (done) => {
            Chai.request(app)
                .delete(`/deletedatabyname/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`User with name: "${ name }" don't exist in database!`)
                    done()
                })
        })
    })
}


describe('TESTING EXISTING DATA ROUTES', () => {
    allData()
    getUserNames()
    getUserByName()
    checkIfUserDoNotExist(newUser.name)
    createTask()
    checkIfUserExist(newUser.name)
    updateUserByName()
    deletedatabyname(updatedUser.newName)
    deletedataThatDontExist(updatedUser.name)
})