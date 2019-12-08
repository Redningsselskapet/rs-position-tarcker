const { AisPosition } = require('../../config/database')
const moment = require('moment')
const timeWindowInMinutes = 1
const queryTimeout = parseInt(process.env.QUERY_TIMEOUT)

const getMovingVessels = async () => {
  const time = moment
    .utc()
    .subtract(timeWindowInMinutes, 'minutes')
    .format('YYYY-MM-DDTHH:mm:ss')

  const positions = await AisPosition.find({
    Time_stamp: { $gte: time },
    SOG: { $gte: 1 }
  }).maxTimeMS(queryTimeout)

  const positionMap = new Map()
  positions
    .map(position => position.toObject())
    .forEach(position => positionMap.set(position.MMSI, position))
  return [...positionMap.values()]
}
module.exports = getMovingVessels
