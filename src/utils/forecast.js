const request = require('request')
const chalk = require('chalk')

const forecast = (lat, log, callback) => {
    const url = `https://api.darksky.net/forecast/94a5a4fffdc56684d95e97085f8c718f/${lat},${log}?units=si`
    request({url, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `Actualmente afuera está ${ response.body.currently.temperature} °C y hay ${ response.body.currently.precipProbability} % probabilidad que llueva`)
        } 
    })
}

module.exports = forecast