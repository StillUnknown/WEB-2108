import Chai from 'chai'
import ChaiHTTP from "chai-http";
import {describe, it} from 'mocha'
import app from '../src/server.js'

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect


const allData = () => {
    describe('Testing to get an array of data (GET)', () => {
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

describe('TESTING EXISTING DATA ROUTES', () => {
    allData()
})