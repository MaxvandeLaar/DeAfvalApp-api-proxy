let Urls = function () {
    //type=ANDROID || type=IOS
    const baseUrl = `http://dataservice.deafvalapp.nl/dataservice/DataServiceServlet`;
    const service = 'service';

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
        garbage: {
            schedule: `${baseUrl}?${service}=OPHAALSCHEMA`
        }
    };
};

module.exports = Urls;