const getAisPosition = require('./get-ais-position')
const moment = require('moment')

/**
 * get the last reported position for an given mmsi
 * @param mmsi
 * @returns {Promise}
 */
const getLastAisPosition = mmsi => {

  return getAisPosition(moment.utc(), mmsi)
}

module.exports = getLastAisPosition
