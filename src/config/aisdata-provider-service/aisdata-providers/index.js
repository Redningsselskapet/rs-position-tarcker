const kystverket = require('./kystverket')
const marineTraffic = require('./marine-traffic')

const aisDataProviders = [
  kystverket,
  marineTraffic
]

module.exports = {
  kystverket,
  marineTraffic,
  aisDataProviders
}