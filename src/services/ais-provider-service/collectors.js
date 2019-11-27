const DataCollector = require('@redningsselskapet/data-collector')
const {
  aisDataProviders
} = require('../../config/aisdata-provider-service/aisdata-providers')
const fetchAisData = require('./fetch-aisdata')
const { addAisPositions } = require('../ais-service')
const serviceManager = require('./collector-manager')

const aisDataCollectors = []

aisDataProviders.forEach(provider => {
  if (!provider.enabled) return
  const collector = DataCollector({
    fetchDataFunc: () =>
      fetchAisData({ url: provider.url, dataMapper: provider.dataMapper }),
    interval: provider.interval,
    name: provider.name,
    workerFunc: data => addAisPositions(data)
  })
  aisDataCollectors.push(serviceManager(collector))
})

aisDataCollectors.start = function () {
  aisDataCollectors.forEach(collector => {
    collector.start()
  })
}
aisDataCollectors.stop = function () {
  aisDataCollectors.forEach(collector => {
    collector.stop()
  })
}

module.exports = aisDataCollectors
