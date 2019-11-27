const fetchAisData = require('./fetch-aisdata')
const aisDataCollector = require('./aisdata-collector')
const dataMapper = require('../../config/aisdata-provider-service/data-mapper')
module.exports = {
  fetchAisData,
  aisDataCollector,
  dataMapper
}
