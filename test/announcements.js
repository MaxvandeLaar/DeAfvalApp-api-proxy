process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const App = require('../deAfvalApp-api-proxy.js');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Announcements', function () {
    let Proxy = new App();
    describe('#getAnnouncements()', function(){
        it('it should return a list of all announcements for a specific address', async function(){
            const announcements = await Proxy.announcements.getAnnouncements('6118AS', 14);
            announcements.should.be.a('array');
            announcements.should.have.lengthOf.at.least(1);
        });
    });
});