const { getWeather } = require('../services/weather-service')

module.exports = {
  getWeather: async (req, res) => {
    const { lat, lng, time } = req.params
    try {
      res.send(await getWeather({ lat, lng, time }))
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  }
}
