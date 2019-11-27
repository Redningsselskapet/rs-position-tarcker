require('dotenv').config({ silent: true })
require('./config')

const path = require('path')
const cors = require('cors')
const express = require('express')
const apiRouter = require('./routes/api-router')
const morgan = require('morgan')

function myTest () {
  const Collector = require('@redningsselskapet/data-collector')
  const provider = require('./config/aisdata-provider-service/aisdata-providers')
    .kystverket
  const dataMapper = require('./config/aisdata-provider-service/data-mapper')
  const fetchAisData = require('./services/ais-provider-service/fetch-aisdata')
  const { addAisPositions } = require('./services/ais-service')
  const aisDataCollector = Collector({
    fetchDataFunc: () =>
      fetchAisData({
        url: provider.url,
        dataMapper: dataMapper.kystverket
      }),
    interval: 2000,
    name: provider.name,
    workerFunc: data => addAisPositions(data)
  })

  aisDataCollector.start()
}
// myTest()

const { aisDataCollectors } = require('./services/ais-provider-service')

aisDataCollectors.start()
