process.env.NODE_ENV = 'test';

let chai = require('chai');
let beforeEach = require('mocha').before;
let chaiHttp = require('chai-http');
let Proxy = require('../deAfvalApp-api-proxy.js');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe('Address', () => {
    let proxy = new Proxy();
    beforeEach((done) => {
        done();
    });
    describe('#getAddress()', () => {
        it(`it should return the full address based on zip code & house number`, async () => {

            const address = await proxy.address.get("6118As", 14);

            console.log("+++++");
            console.log(address);
            console.log("+++++");
            address.should.have.property('zipcode');


        });
    });
});