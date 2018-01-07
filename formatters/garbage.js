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

module.exports = {
    schedule:schedule
};