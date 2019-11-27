const logger = require('../../config/logger')

const info = (message) => {
  logger.info(message)
}
const warn = (message) => {
  logger.warn(message)
}
const debug = (message) => {
  logger.debug(message)
}

const error = (message) => {
  logger.debug(message)
}

module.exports = {
  info,
  warn,
  debug,
  error
}
