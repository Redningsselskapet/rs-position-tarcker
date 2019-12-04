const axios = require('axios')

module.exports = ({ url, dataMapper }) => {
  return axios.get(url).then(response => {
    const aisPositions = response.data
    if (!aisPositions) return []
    return aisPositions.map(aisPosition => {
      return dataMapper(aisPosition)
    })
  })
}
