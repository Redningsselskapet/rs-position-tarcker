const dataMapper = require('./data-mapper')
const { WEATHER_PROVIDER_URL, WEATHER_PROVIDER_API_KEY } = process.env

module.exports = {
  name: 'dark-sky',
  url: `${WEATHER_PROVIDER_URL}/${WEATHER_PROVIDER_API_KEY}`,
  dataMapper: dataMapper.darkSky
}
