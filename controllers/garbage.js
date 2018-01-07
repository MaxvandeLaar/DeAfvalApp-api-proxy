/**
 * @module Garbage
 * @memberOf Proxy
 */

const path = require('path');
const request = require('request');
const Urls = require(path.resolve(global.__base, 'configs/urls'));
const Utils = require(path.resolve(global.__base, 'controllers/utils'));
const Format = require(path.resolve(global.__base, 'controllers/formatter'));

/**
 * This return an object array of the garbage collection schedule
 *
 * @param {string} zipCode - The zip code of the user's address
 * @param {number} houseNumber - The house number of the user's address
 * @param {string} [houseNumberAddition] - The house number addition of the user's address
 * @returns {Promise} Promise object represents an array of objects
 */
function getSchedule(zipCode, houseNumber, houseNumberAddition = '') {
    const url = `${Urls.garbage.schedule}${Utils.urlParams(zipCode, houseNumber, houseNumberAddition)}`;

    return new Promise((fulfill, reject) => {
        request.get(url, (error, response, body) => {
            Utils.rejectHandler(reject, error, response);

            fulfill(Format.garbage.schedule(body));
        });
    });
}

/**
 * This return an object array filled with information about garbage collection
 *
 * @param {string} zipCode - The zip code of the user's address
 * @param {number} houseNumber - The house number of the user's address
 * @param {string} [houseNumberAddition] - The house number addition of the user's address
 * @returns {Promise} Promise object represents an object array filled with garbage collection information
 */
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