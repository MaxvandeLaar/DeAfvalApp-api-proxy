process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const App = require('../deAfvalApp-api-proxy.js');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Garbage', function () {
    const Proxy = new App();
    describe('#getSchedule()', function(){
        it('it should return a list of garbage collection dates for the entire year', async function(){
            const schedule = await Proxy.garbage.getSchedule('6118AS', 14);
            schedule.should.be.a('array');
            schedule.should.have.lengthOf.at.least(1);
        });
    });
});