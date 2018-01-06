const path = require('path');
const request = require('request');
const urls = require(path.resolve(global.__base, 'configs/urls'))();
const Utils = require(path.resolve(global.__base, 'controllers/utils'));
const Format = require(path.resolve(global.__base, 'controllers/formatter'));

function getAnnouncements(zipCode, houseNumber, houseNumberAddition = '') {
    const url = `${urls.announcements.all}${Utils.urlParams(zipCode, houseNumber, houseNumberAddition)}`;

    return new Promise((fulfill, reject) => {
        request.get(url, (error, response, body) => {
            Utils.rejectHandler(reject, error, response);

            fulfill(Format.announcements.announcements(body));
        });
    });
}

module.exports = {
    getAnnouncements: getAnnouncements
};