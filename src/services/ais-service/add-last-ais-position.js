const { LastAisPosition } = require('../../config/database')
const moment = require('moment')

const addLastAisPosition = async vessel => {
  const lastPosition = await LastAisPosition.findOne({ MMSI: vessel.MMSI })
  if (lastPosition) {
    if (
      moment(lastPosition.Time_stamp).unix() < moment(vessel.Time_stamp).unix()
    ) {
      await LastAisPosition.findOneAndRemove({ MMSI: vessel.MMSI })
      new LastAisPosition(vessel).save()
    }
  } else {
    new LastAisPosition(vessel).save()
  }
}

module.exports = addLastAisPosition
