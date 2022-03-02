import ChaiHTTP from "chai-http"
import {describe, it} from 'mocha'
import app from '../src/server.js'
import Chai from "chai"

Chai.should()
Chai.use(ChaiHTTP)

const testingAliveRoute = () => {
    describe('Test a route that exist', () => {
        it('should expect 200 OK', (done) => {
            Chai.request(app)
                .get('/')
                .end((request, response) => {
                    response.should.have.a.status(200)
                    done()
                })
        })
    })
}

describe('Testing Api Alive Routes', () => {
    testingAliveRoute()
})