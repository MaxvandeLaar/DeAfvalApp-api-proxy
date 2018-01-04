process.env.NODE_ENV = 'test';

const chai = require('chai');
const beforeEach = require('mocha').before;
const chaiHttp = require('chai-http');
const Proxy = require('../deAfvalApp-api-proxy.js');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Address', () => {
    let proxy = new Proxy();
    beforeEach((done) => {
        done();
    });
    describe('#getAddress()', () => {
        it(`it should return the full address based on zip code & house number`, async () => {
            const address = await proxy.address.get("6118As", 14);
            address.should.have.property('success').equal(true);
        });
    });
});