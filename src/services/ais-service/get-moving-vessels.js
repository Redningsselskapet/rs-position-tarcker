const { LastAisPosition } = require('../../config/database')

const getMovingVessels = async () => {
  const lastPositions = (await LastAisPosition.find())
  return lastPositions.map(pos => pos.toObject()).filter(vessel => vessel.SOG > 1)
}
module.exports = getMovingVessels
