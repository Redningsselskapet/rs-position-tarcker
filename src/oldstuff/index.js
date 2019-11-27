const aisDataProviders = require('../config/aisdata-provider-service')
const { aisDataCollector, fetchAisData } = require('./aisdata')
const serviceManager = require('../services/ais-provider-service/collector-manager')
const collectors = []

aisDataProviders.forEach(provider => {
  if (!provider.enabled) return
  aisDataCollector({
    fetchAisData: () => {
      fetchAisData({
        url: provider.url,
        dataMapper: provider.dataMapper
      })
    },
    name: provider.name,
    interval: provider.interval,
    enabled: provider.enabled
  })
  collectors.push(serviceManager(aisDataCollector))
})

module.exports = {
  collectors
}
