/**
 * @module Announcements
 * @memberOf Proxy
 */

const path = require('path');
const request = require('request');
const Urls = require(path.resolve(global.__base, 'configs/urls'));
const Utils = require(path.resolve(global.__base, 'controllers/utils'));
const Format = require(path.resolve(global.__base, 'controllers/formatter'));

/**
 * This return an object of all announcements made by the garbage collection company/municipality
 *
 * @param {string} zipCode - The zip code of the user's address
 * @param {number} houseNumber - The house number of the user's address
 * @param {string} [houseNumberAddition] - The house number addition of the user's address
 * @returns {Promise} Promise object represents an array of announcement objects
 */
function getAnnouncements(zipCode, houseNumber, houseNumberAddition = '') {
    const url = `${Urls.announcements.all}${Utils.urlParams(zipCode, houseNumber, houseNumberAddition)}`;

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