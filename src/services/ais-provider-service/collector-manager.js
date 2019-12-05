const logService = require('../logger-service')

module.exports = collector => {
  return {
    start: () => {
      if (!collector.isRunning()) {
        collector.start()
        logService.info(`started: ${collector.name()}`)
      } else {
        logService.warn(`${collector.name()} already running.`)
      }
    },
    stop: () => {
      if (collector.isRunning()) {
        collector.stop()
        logService.info(`stopped: ${collector.name()}`)
      } else {
        logService.warn(`${collector.name()} is not running.`)
      }
    },
    isRunning: () => {
      return collector.isRunning()
    },
    name: () => {
      return collector.name()
    }
  }
}
