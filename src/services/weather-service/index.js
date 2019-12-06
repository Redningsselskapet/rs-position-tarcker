const getWeather = require('./get-weather')
const getStatus = require('./get-status')
module.exports = {
  getWeather,
  getWeatherServiceStatus: getStatus
}
