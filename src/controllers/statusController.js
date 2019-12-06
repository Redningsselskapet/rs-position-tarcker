const {
  getAisProviderServiceStatus
} = require('../services/ais-provider-service')

const { getAisServiceStatus } = require('../services/ais-service')

const { getWeatherServiceStatus } = require('../services/weather-service')
const getStatus = () => ({
  AisProviderServiceStatus: getAisProviderServiceStatus(),
  AisServiceStatus: getAisServiceStatus(),
  WeatherServiceStatus: getWeatherServiceStatus()
})

module.exports = (req, res) => {
  res.send(getStatus())
}
