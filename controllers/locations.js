const path = require('path');
const request = require('request');
const urls = require(path.resolve(global.__base, 'configs/urls'))();
const Utils = require(path.resolve(global.__base, 'controllers/utils'));
const Format = require(path.resolve(global.__base, 'controllers/formatter'));

function getAddress(zipCode, houseNumber, houseNumberAddition = '') {
    zipCode = zipCode.formatZipCode();
    const url = `${urls.locations.address.check}${Utils.urlParams(zipCode, houseNumber, houseNumberAddition)}`;

    return new Promise((fulfill, reject) => {
        request.get(url, (error, response, body) => {
            Utils.rejectHandler(reject, error, response);

            fulfill(Format.locations.address(body, zipCode, houseNumber, houseNumberAddition));
        });
    });
}

function getAllMunicipalities(){
    const url = urls.locations.municipalities.all;

    return new Promise((fulfill, reject) => {
        request.get(url, (error, response, body) => {
            Utils.rejectHandler(reject, error, response);

            fulfill(Format.locations.municipalities(body));
        });
    });
}

function getMunicipalityInfo(zipCode, houseNumber, houseNumberAddition = ''){
    zipCode = zipCode.formatZipCode();

    const url = `${urls.locations.municipalities.info}${Utils.urlParams(zipCode, houseNumber, houseNumberAddition)}`;
    console.log(url);
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