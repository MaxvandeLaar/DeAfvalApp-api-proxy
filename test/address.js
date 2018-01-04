process.env.NODE_ENV = 'test';

const chai = require('chai');
const beforeEach = require('mocha').before;
const chaiHttp = require('chai-http');
const Proxy = require('../deAfvalApp-api-proxy.js');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Address', function () {
    let proxy = new Proxy();
    beforeEach((done) => {
        done();
    });
    describe('#getAddress()', function () {
        const values = [
            {zipcode: '6118AS', houseNumber: 14, houseNumberAddition: '', expected: true},
            {zipcode: '6432DL', houseNumber: 16, houseNumberAddition: '', expected: false},
            {zipcode: '6118AA', houseNumber: 1, houseNumberAddition: '', expected: true},
            {zipcode: '3920', houseNumber: 9, houseNumberAddition: '', expected: true},
            {zipcode: '4020', houseNumber: 7, houseNumberAddition: '', expected: false}
        ];

        values.forEach(function (test) {
            it(`it should return the full address based on zip code: ${test.zipcode} & house number: ${test.houseNumber}${test.houseNumberAddition}`, async function () {
                const address = await proxy.address.get(test.zipcode, test.houseNumber, test.houseNumberAddition);
                address.should.have.property('success').equal(test.expected);
            });
        });
    });
});