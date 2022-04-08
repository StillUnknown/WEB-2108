import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import app from '../src/server.js'

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

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

describe('Testing Alive route', () => {
    testingAliveRoute()
})