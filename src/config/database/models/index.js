const mongoose = require('mongoose')
const aisPositionSchema = require('./ais-position-schema')

module.exports = {
  AisPosition: mongoose.model('Ais Positions', aisPositionSchema),
  LastAisPosition: mongoose.model('Last Ais Positions', aisPositionSchema)
}
