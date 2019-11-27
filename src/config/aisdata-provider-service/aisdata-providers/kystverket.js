const dataMapper = require('../data-mapper')

module.exports = {
  url: process.env.AIS_DATA_PROVIDER_KYSTVERKET_URL,
  dataMapper: dataMapper.kystverket,
  name: 'kystverket',
  interval: 60000,
  enabled: true
}
