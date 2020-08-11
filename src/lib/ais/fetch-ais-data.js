const fetch = require('node-fetch')
const dec2dms = require('@redningsselskapet/dec2dms')
const { isArray } = require('lodash')

/**
 * Fetch ais position data from url
 * @param url
 * @returns {Promise}
 */
const fetchAisData = function (url) {
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(async res => { 
        resolve(transform(await res.json()))
      })
      .catch(error => {
        reject(error)
      })
  })
}

const transform = async (aisPositions) => {
  return aisPositions.map(data => {
    const {lng, lat} = dec2dms({lng: parseFloat(data.LON), lat: parseFloat(data.LAT)})
    return {
      MMSI: data.MMSI,
      Ship_name: 'RS 148 MJ0SVEKTEREN',
      Destination: 'N/A',
      Latitude: lat,
      Longitude: lng,
      Decimal_Latitude: data.LAT,
      Decimal_Longitude: data.LON,
      Time_stamp: data.TIMESTAMP + 'Z',
      SOG: data.SPEED / 10,
      COG: data.COURSE,
    }
  })
}

module.exports = fetchAisData
