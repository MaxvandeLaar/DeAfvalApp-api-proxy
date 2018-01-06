const path = require('path');
const locations = require(path.resolve(global.__base, 'formatters/locations'));
const announcements = require(path.resolve(global.__base, 'formatters/announcements'));

module.exports = {
    locations: locations,
    announcements: announcements
};