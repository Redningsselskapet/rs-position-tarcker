process.env.AIS_DATA_STORED_IN_DAYS = process.env.AIS_DATA_STORED_IN_DAYS || 14
process.env.MAX_TIME_WINDOW_IN_MINUTES = process.env.MAX_TIME_WINDOW_IN_MINUTES || 40

process.env.PORT = process.env.PORT || 3000
process.env.LOG_LEVEL = process.env.LOG_LEVEL || 'info'

process.env.ENABLE_AIS_FETCHER = process.env.ENABLE_AIS_FETCHER || 'false'
process.env.ENABLE_API = process.env.ENABLE_API || 'false'

process.env.AIS_DATA_PROVIDER_KYSTVERKET_API_KEY = ''
process.env.AIS_DATA_PROVIDER_KYSTVERKET_URL = process.env.AIS_DATA_PROVIDER_KYSTVERKET_URL || 'https://ais.rs.no/aktive_pos.json'
process.env.AIS_DATA_PROVIDER_KYSTVERKET_ENABLED = process.env.AIS_DATA_PROVIDER_KYSTVERKET_ENABLED || 'false'

process.env.AIS_DATA_PROVIDER_MARINE_TRAFFIC_API_KEY = process.env.AIS_DATA_PROVIDER_MARINE_TRAFFIC_API_KEY || ''
process.env.AIS_DATA_PROVIDER_MARINE_TRAFFIC_URL = process.env.AIS_DATA_PROVIDER_MARINE_TRAFFIC_URL || `https://services.marinetraffic.com/api/exportvessels/v:8/${process.env.AIS_DATA_PROVIDER_MARINE_TRAFFIC_API_KEY}/timespan:5/protocol:jsono`
process.env.AIS_DATA_PROVIDER_MARINE_TRAFFIC_ENABLED = process.env.AIS_DATA_PROVIDER_MARINE_TRAFFIC_ENABLED || 'false'

if (
  (process.env.ENABLE_AIS_FETCHER &&
    !process.env.AIS_DATA_PROVIDER_KYSTVERKET_URL) ||
  (process.env.ENABLE_AIS_FETCHER &&
    !process.env.AIS_DATA_PROVIDER_KYSTVERKET_URL)
) {
  console.error(
    'error:',
    'You need to set atleast one aisdata provider in Ais Fetcher mode.'
  )
  process.exit()
}

if (!process.env.DB_URI) {
  console.error('error:', 'DB_HOST is not set')
  process.exit()
}

if (!process.env.DB_PASSWORD) {
  console.error('error:', 'DB_PASSWORD is not set')
  process.exit()
}

if (!process.env.DB_USER) {
  console.error('error:', 'DB_USER is not set')
  process.exit()
}
