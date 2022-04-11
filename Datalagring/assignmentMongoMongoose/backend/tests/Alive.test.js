import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import app from '../src/server.js'

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const randomURL = Math.random().toString(36).substring(7)

const testNonExistingRoute = () => {
    describe('Testing a route that does not exist', () => {
        test('should return status 404', (done) => {
            Chai.request(app)
                .get(`/${randomURL}`)
                .end((request, response) => {
                    expect(response.status).to.equal(404)
                    done()
                })
        })
    })
}

const testingAliveRoute = () => {
    describe('Test Alive route', () => {
        test('Expecting 200 OK', (done) => {
            Chai.request(app)
                .get('/')
                .end((request, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal('API IS UP AND RUNNING')
                    done()
                })
        })
    })
}

describe('Testing Alive route and route that does not exist', () => {
    testNonExistingRoute()
    testingAliveRoute()
})