const path = require('path');
const Utils = require(path.resolve(global.__base, 'controllers/utils'));
const xml2js = require('xml2js');

function municipalityInfo(body){
    const xmlParser = new xml2js.Parser({
        explicitArray: false,
        explicitRoot: false,
        normalize: true,
        trim:true,
        normalizeTags:true,
    });

    body = Utils.wrapCDATA(body, 'naam');
    body = Utils.wrapCDATA(body, 'kop');
    body = Utils.wrapCDATA(body, 'disclaimer');
    body = Utils.wrapCDATA(body, 'adressen');
    body = Utils.wrapCDATA(body, 'info');
    body = Utils.wrapCDATA(body, 'overige');
    body = Utils.wrapCDATA(body, 'website');
    body = Utils.wrapCDATA(body, 'banner');
    body = Utils.wrapCDATA(body, 'logo');

    return new Promise((fulfill, reject) => {
        xmlParser.parseString(body, function (err, result) {
            if (err)
                reject(err);

            result.success = true;
            fulfill(result);
        });
    });
}

function address(body, zipCode, houseNumber, houseNumberAddition = '') {
    let data = body.split(';');
    if (data[0] === '0') {
        return {
            success: true,
            street: data[4] === '-'?'':data[4],
            houseNumber: houseNumber,
            houseNumberAddition: houseNumberAddition,
            zipCode: zipCode,
            city: data[1],
            country: Utils.getCountryByZipcode(zipCode),
            latitude: data[2],
            longitude: data[3]
        };
    }
    return {
        success:false,
        error: body
    };
}

function municipalities(body){
    let data = body.split('\n');
    if (!data[data.length-1]){
        data.pop();
    }
    let result = [];
    data.forEach((value) => {
        let tmp = value.split(';');
        result.push({country: tmp[0], municipality:tmp[1]});
    });
    return result;
}

module.exports = {
    address: address,
    municipalities: municipalities,
    municipalityInfo: municipalityInfo
};