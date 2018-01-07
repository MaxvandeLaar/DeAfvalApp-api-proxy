const path = require('path');
const locations = require(path.resolve(global.__base, 'formatters/locations'));
const announcements = require(path.resolve(global.__base, 'formatters/announcements'));
const garbage = require(path.resolve(global.__base, 'formatters/garbage'));

module.exports = {
    locations: locations,
    announcements: announcements,
    garbage: garbage
};