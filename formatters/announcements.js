function announcements(body){
    let data = body.split('\n');
    if (!data[data.length-1]){
        data.pop();
    }
    let result = [];
    data.forEach((value) => {
        let tmp = value.split(';');
        result.push({startDate: tmp[0], endDate: tmp[1], title:tmp[2], body:tmp[3]});
    });
    return result;
}

module.exports = {
    announcements:announcements
};