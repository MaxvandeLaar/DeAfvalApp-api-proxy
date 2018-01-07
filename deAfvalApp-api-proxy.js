// set home folder to global variable to ensure custom modules are not duplicated included.
// example: let instanceConf = require(`${__base}/configs/instance`);
global.__base = __dirname;

const path = require('path');
const Locations = require(path.resolve(__dirname, 'controllers/locations'));
const Announcements = require(path.resolve(__dirname, 'controllers/announcements'));

const Proxy = function(){
    Proxy.prototype.locations = Locations;
    Proxy.prototype.announcements = Announcements;
};

module.exports = Proxy;