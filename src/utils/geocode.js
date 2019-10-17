const request = require('request')

const geocode = ( address, callback ) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYW5nZWxnb2V6IiwiYSI6ImNrMTc1c3gwbjFjengzZG1vaHpzZTN4bmkifQ.PGSVWaaBEnYLIRlk7BPQwA`
    request({url, json:true}, (error, response) => {
        if ( error ){
            callback('Unable to connect to location server', undefined)
        } else if( response.body.features.length === 0 ){
            callback('Unable to find to location. Try another place', undefined)
        } else {
            callback(undefined, {
                location: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0]
            })
        }
    })
}

module.exports = geocode