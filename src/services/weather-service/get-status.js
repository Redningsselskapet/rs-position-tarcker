const pjson = require('../../../package.json')
const weatherProvider = require('../../config/weather-provider')
module.exports = () => ({
  version: pjson.version,
  weatherProvider: { name: weatherProvider.name }
})
