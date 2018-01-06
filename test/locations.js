process.env.NODE_ENV = 'test';

const chai = require('chai');
const beforeEach = require('mocha').before;
const chaiHttp = require('chai-http');
const App = require('../deAfvalApp-api-proxy.js');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Locations', function () {
    let Proxy = new App();
    beforeEach((done) => {
        done();
    });
    describe('#getAddress()', function () {
        const values = [
            {zipCode: '6118AS', houseNumber: 14, houseNumberAddition: '', expected: true},
            {zipCode: '6432DL', houseNumber: 16, houseNumberAddition: '', expected: false},
            {zipCode: '6118AA', houseNumber: 1, houseNumberAddition: '', expected: true},
            {zipCode: '3920', houseNumber: 9, houseNumberAddition: '', expected: true},
            {zipCode: '4020', houseNumber: 7, houseNumberAddition: '', expected: false}
        ];

        values.forEach(function (test) {
            it(`it should return the full address based on zip code: ${test.zipCode} & house number: ${test.houseNumber}${test.houseNumberAddition}`, async function () {
                const address = await Proxy.locations.getAddress(test.zipCode, test.houseNumber, test.houseNumberAddition);
                address.should.have.property('success').equal(test.expected);
            });
        });
    });

    describe('#getMunicipalities()', function(){
        it('it should return a list of all participating municipalities', async function(){
            const municipalities = await Proxy.locations.getAllMunicipalities();
            municipalities.should.be.a('array');
            municipalities.should.have.lengthOf.at.least(1);
        });
    });

    describe('#getMunicipalityInfo()', function(){
        it('it should return a list of all participating municipalities', async function(){
            const municipalityInfo = await Proxy.locations.getMunicipalityInfo('6118AS', 14);
            municipalityInfo.should.be.a('object');
            municipalityInfo.should.have.property('success').equal(true);
        });
    });
});