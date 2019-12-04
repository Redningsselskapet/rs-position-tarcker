## OPTIONAL ENVIROMENTS VARIABLES:

* AIS_DATA_STORED_IN_DAYS (default: 14)
* AIS_DATA_FETCH_INTERVAL (default: 10000)
* MAX_TIME_WINDOW_IN_MINUTES (default: 40)
* PORT (default: 3000)
* LOG_LEVEL (default: error)

Specify at least one:

* ENABLE_AIS_FETCHER (default: false)
* ENABLE_API (default: false)

## MANDATORY ENVRONMENTS VARIABLES

* AIS_DATA_URL (default: not set)
* DB_URI (default: not set)
* DB_USER (defualt: not set)
* DB_PASSWORD (default not set)

## Examples:

### Run with docker
```
docker run kenguru33/rs-position-tracker -e DB_URI=mongodb://mongodb/mydb:27017/positions -e DB_USER=dbuser -e DB_PASSWORD=pass -e AIS_DATA_URL=https://ais.rs.no/aktive_pos.json -e ENABLE_API=true 
```

### Run locally
First you need to create a .env file. (See .env-example)
```
npm install
npm start # or npm watch to run with nodemon
```

### docker-compose example:

### dev setup:
```
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
Info: restart: true - since we use nodemon, make debugger reattach on every restart.