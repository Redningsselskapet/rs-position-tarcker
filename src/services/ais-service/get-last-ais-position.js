// const getAisPosition = require('./get-ais-position')
const { LastAisPosition } = require('../../config/database')

/**
 * get the last reported position for an given mmsi
 * @param mmsi
 * @returns {Promise}
 */
const getLastAisPosition = async mmsi => {
  return (await LastAisPosition.findOne({ MMSI: mmsi })).toObject()
}

module.exports = getLastAisPosition
