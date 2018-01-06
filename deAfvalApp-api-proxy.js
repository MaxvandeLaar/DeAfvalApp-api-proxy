// set home folder to global variable to ensure custom modules are not duplicated included.
// example: let instanceConf = require(`${__base}/configs/instance`);
global.__base = __dirname;

let path = require('path');
let Locations = require(path.resolve(__dirname, 'controllers/locations'));
let Announcements = require(path.resolve(__dirname, 'controllers/announcements'));

let Proxy = function(){

    Proxy.prototype.locations = Locations;
    Proxy.prototype.announcements = Announcements;
};

module.exports = Proxy;