const axios = require('axios')
module.exports = ({ url, dataMapper }) => {
  return axios.get(url).then(response => {
    console.log('url: ' + url)
    const aisPositions = response.data
    return aisPositions.map(aisPosition => {
      return dataMapper(aisPosition)
    })
  })
}
