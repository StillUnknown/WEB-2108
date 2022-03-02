import Chai from "chai";
import ChaiHTTP from "chai-http";
import {describe, it} from 'mocha'
import app from "../src/server.js";

Chai.should()
Chai.use(ChaiHTTP)

const testingCreateRoute = () => {
    describe('Test a route that exist', () => {
        it('should expect 201 OK', (done) => {
            Chai.request(app)
                .get('/createtask')
                .end((request, response) => {
                    response.should.have.a.status(201)
                    done()
                })
        })
    })
}

describe('Testing create route', () => {
    testingCreateRoute()
})