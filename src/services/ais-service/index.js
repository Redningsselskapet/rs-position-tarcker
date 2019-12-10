const addAisPositions = require('./add-ais-positions')
const getAisPosition = require('./get-ais-position')
const getAisPositions = require('./get-ais-positions')
const getAisTTG = require('./get-ais-ttg')
const getDistance = require('./get-distance')
const removeAisPosition = require('./remove-ais-positions')
const getLastAisPosition = require('./get-last-ais-position')
const getMovingVessels = require('./get-moving-vessels')
const getAisServiceStatus = require('./get-status')
const addLastAisPosition = require('./add-last-ais-position')

module.exports = {
  addAisPositions,
  getAisPosition,
  getAisPositions,
  getAisTTG,
  getDistance,
  removeAisPosition,
  getLastAisPosition,
  getMovingVessels,
  getAisServiceStatus,
  addLastAisPosition
}
