const dataMapper = require('../data-mapper')

module.exports = {
  // 'https://services.marinetraffic.com/api/exportvessels/v:8/c03c8a1570c13a6f3497d189adc9294c96e5b5fc/timespan:5/protocol:jsono',
  url: process.env.AIS_DATA_PROVIDER_MARINE_TRAFFIC_URL,
  dataMapper: dataMapper.marineTraffic,
  name: 'marine-traffic',
  interval: 60000,
  enabled: true
}
