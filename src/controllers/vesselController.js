// const fetchAisData = require('../lib/ais').fetchAisData
const { fetchAisData } = require('../services/ais-provider-service')
const { marineTraffic, kystverket } = require('../config/aisdata-providers')
module.exports = {
  async getMovingVessels (req, res) {
    const vesselsKystverket = await fetchAisData({ url: kystverket.url, dataMapper: kystverket.dataMapper })
    const vesselsMarineTraffic = await fetchAisData({ url: marineTraffic.url, dataMapper: marineTraffic.dataMapper })
    // movingVessels.push(...vesselsKystverket.filter(vessel => vessel.SOG > 1), ...vesselsFromMarineTraffic.filter(vessel => vessel.SOG > 1))
    res.send([...vesselsKystverket.filter(vessel => vessel.SOG > 1), ...vesselsMarineTraffic.filter(vessel => vessel.SOG > 1)])
    /* fetchAisData(process.env.AIS_DATA_URL).then(aisData => {
      const vessels = aisData.filter(vessel => vessel.SOG > 1)
      res.send(vessels)
    }) */
  }
}
