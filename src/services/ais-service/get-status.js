const { AisPosition } = require('../../config/database')
const pjson = require('../../../package.json')

module.exports = () => ({
  version: pjson.version,
  enabled: process.env.ENABLE_API,
  storedInDays: process.env.AIS_DATA_STORED_IN_DAYS,
  maxTimeWindowInMinutes: process.env.MAX_TIME_WINDOW_IN_MINUTES
})
