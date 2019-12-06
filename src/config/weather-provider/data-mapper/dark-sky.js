const moment = require('moment')
module.exports = data => {
  return {
    lat: data.latitude,
    lng: data.longitude,
    time: moment.unix(data.currently.time).format('YYYY-MM-DDTHH:mm:ss') + 'Z',
    summary: data.currently.summary,
    icon: data.currently.icon,
    precipIntensity: data.currently.precipIntensity,
    precipProbability: data.currently.precipProbability,
    temperature: data.currently.temperature,
    apparentTemperature: data.currently.apparentTemperature,
    dewPoint: data.currently.dewPoint,
    humidity: data.currently.humidity,
    pressure: data.currently.pressure,
    windSpeed: data.currently.windSpeed,
    windGust: data.currently.windGust,
    windBearing: data.currently.windBearing,
    cloudCover: data.currently.cloudCover,
    visibility: data.currently.visibility
  }
}
