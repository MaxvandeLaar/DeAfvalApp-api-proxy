/**
 * @module Proxy
 * @property {module:Locations} locations
 * @property {module:Announcements} announcements
 * @property {module:Garbage} garbage
 */

// set home folder to global variable to ensure custom modules are not duplicated included.
// example: let instanceConf = require(`${__base}/configs/instance`);
global.__base = __dirname;

const path = require('path');
const Locations = require(path.resolve(__dirname, 'controllers/locations'));
const Announcements = require(path.resolve(__dirname, 'controllers/announcements'));
const Garbage = require(path.resolve(__dirname, 'controllers/garbage'));

/**
 *
 * @constructor
 */
const Proxy = function(){
    Proxy.prototype.locations = Locations;
    Proxy.prototype.announcements = Announcements;
    Proxy.prototype.garbage = Garbage;
};

module.exports = Proxy;