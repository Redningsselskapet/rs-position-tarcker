const { aisDataProviders } = require('../../config/aisdata-providers')
const aisDataCollectors = require('./collectors')
const pjson = require('../../../package.json')

const getAisDataProviderStatus = () => {
  return aisDataProviders.map(provider => ({
    name: provider.name,
    enabled: provider.enabled,
    interval: provider.interval
  }))
}
const getAisDataCollectorStatus = () => {
  return aisDataCollectors.map(collector => ({
    name: collector.name(),
    isRunning: collector.isRunning()
  }))
}

module.exports = () => ({
  version: pjson.version,
  enabled: process.env.ENABLE_AIS_COLLECTOR,
  aisDataCollectors: getAisDataCollectorStatus(),
  aisDatProviders: getAisDataProviderStatus()
})
