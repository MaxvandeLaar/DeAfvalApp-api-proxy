let Urls = function () {
    //type=ANDROID || type=IOS
    let baseUrl = `http://dataservice.deafvalapp.nl/dataservice/DataServiceServlet`;
    let service = 'service';

    return {
        address: {
            check: `${baseUrl}?${service}=CHECK_ADRES`
        },
        schedule: `${baseUrl}?${service}=OPHAALSCHEMA`
    };
};

module.exports = Urls;