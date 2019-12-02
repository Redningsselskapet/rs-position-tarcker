const worker = require('@redningsselskapet/data-worker')

const {
  aisDataProviders
} = require('../../config/aisdata-provider-service/aisdata-providers')
const fetchAisData = require('./fetch-aisdata')
const { addAisPositions } = require('../ais-service')
const serviceManager = require('./collector-manager')
const logger = require('../logger-service')

const aisDataCollectors = []

aisDataProviders.forEach(provider => {
  logger.info(
    `Provider ${provider.name} is ${provider.enabled ? 'enabled' : 'disabled'}`
  )
  if (!provider.enabled) return
  const collector = worker({
    worker: async () => {
      const data = await fetchAisData({ url: provider.url, dataMapper: provider.dataMapper })
      addAisPositions(data)
    },
    interval: provider.interval,
    name: provider.name
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
