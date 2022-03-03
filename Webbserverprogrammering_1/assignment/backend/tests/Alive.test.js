import ChaiHTTP from "chai-http"
import {describe, it} from 'mocha'
import app from '../src/server.js'
import Chai from "chai"

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const testingAliveRoute = () => {
    describe('Test a route that exist', () => {
        it('should expect 200 OK', (done) => {
            Chai.request(app)
                .get('/')
                .end((request, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal('API is Alive!')
                    done()
                })
        })
    })
}

describe('TESTING API ALIVE ROUTE', () => {
    testingAliveRoute()
})