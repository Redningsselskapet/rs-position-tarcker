const { AisPosition } = require('../../config/database')
const logger = require('../logger-service')

// const AisPosition = models.AisPosition<<<
/**
 * Adds positions to database
 * @param jsonDataArray
 * @returns {Promise.<*>}
 */
const addAisPositions = jsonDataArray => {
  const storeOperations = jsonDataArray.map(jsonAisPosition => {
    return (
      new AisPosition(jsonAisPosition)
        .save()
        .then(aisData => logger.debug(`SAVE - ${aisData}`))
        // put a catch block here to prevent promise.all to fail on error.
        .catch(error => {
          if (error.code === 11000) {
            logger.warn(`SAVE - ${error.message}`)
          } else {
            throw error
          }
        })
    )
  })

  return Promise.all(storeOperations)
}

module.exports = addAisPositions
