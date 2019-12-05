const {
  getAisProviderServiceStatus
} = require('../services/ais-provider-service')

const { getAisServiceStatus } = require('../services/ais-service')

const getStatus = () => ({
  AisProviderServiceStatus: getAisProviderServiceStatus(),
  AisServiceStatus: getAisServiceStatus()
})

module.exports = (req, res) => {
  res.send(getStatus())
}
