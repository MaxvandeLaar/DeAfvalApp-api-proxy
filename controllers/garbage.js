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

function getGarbageInfo(zipCode, houseNumber, houseNumberAddition = ''){
    zipCode = zipCode.formatZipCode();

    const url = `${Urls.garbage.info}${Utils.urlParams(zipCode, houseNumber, houseNumberAddition)}`;
    return new Promise((fulfill, reject) => {
        request.get(url, async (error, response, body) => {
            Utils.rejectHandler(reject, error, response);

            const info = await Format.garbage.garbageInfo(body);
            fulfill(info);
        });
    });
}

module.exports = {
    getSchedule: getSchedule,
    getGarbageInfo: getGarbageInfo
};