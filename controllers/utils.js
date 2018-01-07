String.prototype.formatZipCode = function(){
    return this.toUpperCase().replace(/\s/g, '');
};

function rejectHandler(reject, error, response, expectedStatusCode = 200){
    if (error)
        reject(error);
    if (response.statusCode !== expectedStatusCode)
        reject(response);
}

function urlParams(zipCode, houseNumber, houseNumberAddition = ''){
    const country = getCountryByZipcode(zipCode);
    return `&land=${country}&postcode=${zipCode}&huisnr=${houseNumber}&huisnrtoev=${houseNumberAddition}`;
}

function getCountryByZipcode(zipCode) {
    zipCode.formatZipCode();
    const regexNL = new RegExp(/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i);
    const regexBE = new RegExp(/^[1-9]{1}[0-9]{3}$/i);

    let country = null;
    if (regexNL.test(zipCode)) {
        country = 'NL';
    } else if (regexBE.test(zipCode)) {
        country = 'BE';
    }

    return country;
}

function wrapCDATA(body, node){
    return body.replace(`<${node}>`, `<${node}><![CDATA[`).replace(`</${node}>`, `]]></${node}>`);
}

module.exports = {
    rejectHandler: rejectHandler,
    urlParams: urlParams,
    getCountryByZipcode: getCountryByZipcode,
    wrapCDATA: wrapCDATA
};