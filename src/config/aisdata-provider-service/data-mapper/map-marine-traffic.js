const dec2dms = require('@redningsselskapet/dec2dms')

module.exports = data => {
  const { lat, lng } = dec2dms({ lat: parseFloat(data.LAT), lng: parseFloat(data.LON) })
  console.log('lat: ' + lat + ' - ' + data.LAT)
  console.log('lng: ' + lng + ' - ' + data.LON)
  return {
    MMSI: data.MMSI,
    Ship_name: 'N/A',
    Latitude: lat,
    Longitude: lng,
    Decimal_Latitude: data.LAT,
    Decimal_Longitude: data.LON,
    Time_stamp: data.TIMESTAMP,
    SOG: data.SPEED,
    COG: data.COURSE
  }
}
