const weatherProvider = require('../../config/weather-provider')
const axios = require('axios')
const moment = require('moment')

const getWeather = async ({ lat, lng, time }) => {
  const url = weatherProvider.url
  time = moment(time).unix()
  console.log(time)
  console.log(`${url}/${lat},${lng},${time}?exclude=minutely,hourly,daily,alerts,flags&units=si`)
  return axios.get(`${url}/${lat},${lng},${time}?exclude=minutely,hourly,daily,alerts,flags&units=si`).then(response => {
    const weather = response.data
    return weather
  })
}

module.exports = getWeather

// https://api.darksky.net/forecast/[key]/[latitude],[longitude],[time]
