const path = require('path');
const request = require('request');
const urls = require(path.resolve(global.__base, 'configs/urls'))();

function get(zipcode, houseNumber, houseNumberAddition = '') {
    zipcode = zipcode.toUpperCase().replace(/\s/g, '');
    const country = getCountryByZipcode(zipcode);

    const url = `${urls.address.check}&land=${country}&postcode=${zipcode}&huisnr=${houseNumber}&huisnrtoev=${houseNumberAddition}`;

    return new Promise((fulfill, reject) => {
        request.get(url, function (error, response, body) {
            if (!error) {
                fulfill(formatAddress(body, zipcode, houseNumber, houseNumberAddition));
            } else {
                reject(error);
            }
        });
    });
}

function getCountryByZipcode(zipcode) {
    zipcode.toUpperCase().replace(/\s/g, '');
    const regexNL = new RegExp(/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i);
    const regexBE = new RegExp(/^[1-9]{1}[0-9]{3}$/i);

    let country = null;
    if (regexNL.test(zipcode)) {
        country = 'NL';
    } else if (regexBE.test(zipcode)) {
        country = 'BE';
    }

    return country;
}

function formatAddress(body, zipcode, houseNumber, houseNumberAddition = '') {
    let data = body.split(';');
    if (data[0] === '0') {
        return {
            success: true,
            street: data[4] === '-'?'':data[4],
            houseNumber: houseNumber,
            houseNumberAddition: houseNumberAddition,
            zipcode: zipcode,
            city: data[1],
            country: getCountryByZipcode(zipcode),
            latitude: data[2],
            longitude: data[3]
        };
    }
    return {
        success:false,
        error: body
    };

}

let Address = {
    get: get
};

module.exports = Address;