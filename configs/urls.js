let Urls = function () {
    //type=ANDROID || type=IOS
    let baseUrl = `http://dataservice.deafvalapp.nl/dataservice/DataServiceServlet`;
    let service = 'service';

    return {
        locations: {
            municipalities: {
                all: `${baseUrl}?${service}=GEMEENTEN`,
                info: `${baseUrl}?${service}=GEMEENTEINFO`
            },
            address:{
                check: `${baseUrl}?${service}=CHECK_ADRES`
            }
        },
        announcements: {
            all: `${baseUrl}?${service}=MEDEDELINGEN`
        },
        schedule: `${baseUrl}?${service}=OPHAALSCHEMA`
    };
};

module.exports = Urls;