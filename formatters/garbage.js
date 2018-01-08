const path = require('path');
const Utils = require(path.resolve(global.__base, 'controllers/utils'));
const xml2js = require('xml2js');

function schedule(body){
    let data = body.split('\n');
    if (!data[data.length-1]){
        data.pop();
    }
    let result = [];
    data.forEach((value) => {
        let tmp = value.split(';');
        let type = tmp[0];
        tmp.shift();
        if (!tmp[tmp.length-1]){
            tmp.pop();
        }
        tmp.reverse();
        result.push({type: type, dates: tmp});
    });
    return result;
}

function garbageInfo(body){
    const xmlParser = new xml2js.Parser({
        explicitArray: false,
        explicitRoot: false,
        normalize: true,
        trim:true,
        normalizeTags:true,
    });

    body = Utils.wrapCDATA(body, 'stroom');
    body = Utils.wrapCDATA(body, 'naam');
    body = Utils.wrapCDATA(body, 'naamkort');
    body = Utils.wrapCDATA(body, 'info');
    body = Utils.wrapCDATA(body, 'wel');
    body = Utils.wrapCDATA(body, 'niet');
    body = Utils.wrapCDATA(body, 'calicon');
    body = Utils.wrapCDATA(body, 'mapicon');

    return new Promise((fulfill, reject) => {
        xmlParser.parseString(body, function (err, result) {
            if (err)
                reject(err);

            result.success = true;
            result.garbageInfo = Utils.delKey(result, "afvalinfo");

            result.garbageInfo.forEach((val, i) => {
                val.garbageTypes = Utils.delKey(val, "afvalstromen");
                val.garbageTypes.type = Utils.delKey(val.garbageTypes, "stroom");
                val.name = Utils.delKey(val, "naam");
                val.shortName = Utils.delKey(val, "naamkort");
                val.howTo = Utils.delKey(val, "wel");
                val.howNotTo = Utils.delKey(val, "niet");
            });

            fulfill(result);
        });
    });
}

module.exports = {
    schedule:schedule,
    garbageInfo: garbageInfo
};