//Device type is added as url parameter in the original app, unclear why...
//type=ANDROID || type=IOS

const baseUrl = `http://dataservice.deafvalapp.nl/dataservice/DataServiceServlet`;
const service = 'service';

module.exports =  {
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
        schedule: `${baseUrl}?${service}=OPHAALSCHEMA`,
        info: `${baseUrl}?${service}=FRACTIEINFO`
    }
};