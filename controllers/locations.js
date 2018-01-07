/**
 * @module Locations
 * @memberOf Proxy
 */

const path = require('path');
const request = require('request');
const Urls = require(path.resolve(global.__base, 'configs/urls'));
const Utils = require(path.resolve(global.__base, 'controllers/utils'));
const Format = require(path.resolve(global.__base, 'controllers/formatter'));

/**
 * This return an Address object based on a zip code and house number
 *
 * @param {string} zipCode - The zip code of the user's address
 * @param {number} houseNumber - The house number of the user's address
 * @param {string} [houseNumberAddition] - The house number addition of the user's address
 * @returns {Promise} Promise object represents an object filled with address data
 */
function getAddress(zipCode, houseNumber, houseNumberAddition = '') {
    zipCode = zipCode.formatZipCode();
    const url = `${Urls.locations.address.check}${Utils.urlParams(zipCode, houseNumber, houseNumberAddition)}`;

    return new Promise((fulfill, reject) => {
        request.get(url, (error, response, body) => {
            Utils.rejectHandler(reject, error, response);

            fulfill(Format.locations.address(body, zipCode, houseNumber, houseNumberAddition));
        });
    });
}

/**
 * List all available municipalities in an object array
 *
 * @returns {Promise} Promise object represents an object array filled with municipality data
 */
function getAllMunicipalities(){
    const url = Urls.locations.municipalities.all;

    return new Promise((fulfill, reject) => {
        request.get(url, (error, response, body) => {
            Utils.rejectHandler(reject, error, response);

            fulfill(Format.locations.municipalities(body));
        });
    });
}

/**
 * This return an municipality object based on a zip code and house number
 *
 * @param {string} zipCode - The zip code of the user's address
 * @param {number} houseNumber - The house number of the user's address
 * @param {string} [houseNumberAddition] - The house number addition of the user's address
 * @returns {Promise} Promise object represents an object filled with municipality information
 */
function getMunicipalityInfo(zipCode, houseNumber, houseNumberAddition = ''){
    zipCode = zipCode.formatZipCode();

    const url = `${Urls.locations.municipalities.info}${Utils.urlParams(zipCode, houseNumber, houseNumberAddition)}`;
    return new Promise((fulfill, reject) => {
        request.get(url, async (error, response, body) => {
            Utils.rejectHandler(reject, error, response);

            const info = await Format.locations.municipalityInfo(body);
            fulfill(info);
        });
    });
}

let Locations = {
    getAddress: getAddress,
    getAllMunicipalities: getAllMunicipalities,
    getMunicipalityInfo: getMunicipalityInfo
};

module.exports = Locations;