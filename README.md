## OPTIONAL ENVIROMENTS VARIABLES:

* AIS_DATA_STORED_IN_DAYS (default: 14)
* MAX_TIME_WINDOW_IN_MINUTES (default: 40)
* PORT (default: 3000)
* LOG_LEVEL (default: error)

Enable atleast one:

* ENABLE_AIS_COLLECTOR (default: false)
* ENABLE_API (default: true)

## Ais Data Providers

### Kystverket
* AIS_DATA_PROVIDER_KYSTVERKET_API_KEY (default: none)
* AIS_DATA_PROVIDER_KYSTVERKET_URL (default: https://ais.rs.no/aktive_pos.json)
* AIS_DATA_PROVIDER_KYSTVERKET_ENABLED (default: false)

### Marine Traffic
* AIS_DATA_PROVIDER_MARINE_TRAFFIC_API_KEY (default: none)
* AIS_DATA_PROVIDER_MARINE_TRAFFIC_URL (default: `https://services.marinetraffic.com/api/exportvessels/v:8/${process.env.AIS_DATA_PROVIDER_MARINE_TRAFFIC_API_KEY}/timespan:5/protocol:jsono`)
* AIS_DATA_PROVIDER_MARINE_TRAFFIC_ENABLED (default: none)

## Weather Data Provider
* WEATHER_PROVIDER_URL (default: none)
* WEATHER_PROVIDER_API_KEY (default: none)

## MANDATORY ENVRONMENTS VARIABLES

* AIS_DATA_URL (default: not set)
* DB_URI (default: not set)
* DB_USER (defualt: not set)
* DB_PASSWORD (default not set)

## Examples:

### Run with docker
```bash
docker run kenguru33/rs-position-tracker -e DB_URI=mongodb://mongodb/mydb:27017/positions -e DB_USER=dbuser -e DB_PASSWORD=pass -e AIS_DATA_URL=https://ais.rs.no/aktive_pos.json -e ENABLE_API=true -e ENABLE_AIS_COLLECTOR=true -e AIS_DATA_PROVIDER_KYSTVERKET_ENABLED=true
```

### Run locally
First you need to create a .env file. (See .env-example)
```bash
npm install
npm start # or npm watch to run with nodemon
```

### docker-compose example:

### dev setup:
```bash
docker-compose -f docker-compose-dev.yml up --build  
```

### debug in docker container - vscode setup

Add this configuration to the debug config in vscode
```javascript
{
  "type": "node",
  "request": "attach",
  "name": "Docker: Attach to Node",
  "remoteRoot": "/app",
  "restart": true
}
```
- restart: true - since we use nodemon, make debugger reattach on every restart.