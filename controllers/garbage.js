const path = require('path');
const request = require('request');
const Urls = require(path.resolve(global.__base, 'configs/urls'));
const Utils = require(path.resolve(global.__base, 'controllers/utils'));
const Format = require(path.resolve(global.__base, 'controllers/formatter'));

function getSchedule(zipCode, houseNumber, houseNumberAddition = '') {
    const url = `${Urls.garbage.schedule}${Utils.urlParams(zipCode, houseNumber, houseNumberAddition)}`;

    return new Promise((fulfill, reject) => {
        request.get(url, (error, response, body) => {
            Utils.rejectHandler(reject, error, response);

            fulfill(Format.garbage.schedule(body));
        });
    });
}

module.exports = {
    getSchedule: getSchedule
};