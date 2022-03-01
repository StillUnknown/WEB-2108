import Chai from "chai"
import ChaiHTTP from 'chai-http'
import { describe, it } from 'mocha'
import app from "../src/server.js"

Chai.should()
Chai.use(ChaiHTTP)

const testingNonExistingRoute = () => {
    describe('Testing a route that dont exist', () => {
        it('should expect statusCode 404 not found', (done) => {
            Chai.request(app)
                .get('/randomUrl')
                .end((request, response) => {
                    response.should.have.a.status(404)
                    done()
                })
        })
    })
}

describe('Testing API Alive route', () => {
    testingNonExistingRoute()
})
