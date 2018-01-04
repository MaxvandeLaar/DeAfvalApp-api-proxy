// set home folder to global variable to ensure custom modules are not duplicated included.
// example: let instanceConf = require(`${__base}/configs/instance`);
global.__base = __dirname;

let path = require('path');
let Address = require(path.resolve(__dirname, 'controllers/address'));

let Proxy = function(){

    Proxy.prototype.address = Address;
};

module.exports = Proxy;