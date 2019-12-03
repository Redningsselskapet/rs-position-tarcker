const worker = require('@redningsselskapet/data-worker')

const { aisDataProviders } = require('../../config/aisdata-providers')
const fetchAisData = require('./fetch-aisdata')
const { addAisPositions } = require('../ais-service')
const serviceManager = require('./collector-manager')
const logger = require('../logger-service')

const moment = require('moment')

const aisDataCollectors = []
const movingVessels = []

aisDataProviders.forEach(provider => {
  logger.info(
    `Provider ${provider.name} is ${provider.enabled ? 'enabled' : 'disabled'}`
  )
  if (!provider.enabled) return
  const collector = worker({
    worker: async () => {
      const data = await fetchAisData({
        url: provider.url,
        dataMapper: provider.dataMapper
      })
      addAisPositions(data)
      data
        .filter(vessel => vessel.SOG > 1)
        .map(vessel => movingVessels.push(vessel))
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

aisDataCollectors.getMovingVessels = function () {
  return movingVessels
    .sort((v1, v2) => {
      return v1.MMSI - v2.MSSI
    })
    .sort((v1, v2) => {
      return moment.utc(v1.Time_stamp) - moment.utc(v2.Time_stamp)
    })
}

module.exports = aisDataCollectors
