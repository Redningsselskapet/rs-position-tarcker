// require('dotenv').config({ silent: true })
// require('./config')

require('./config')
const path = require('path')
const chalk = require('chalk')
const cors = require('cors')
const express = require('express')
const apiRouter = require('./routes/api-router')
const morgan = require('morgan')

const AisCollector = require('./lib/ais/collector')

const swaggerSpec = require('./docs/swagger-spec')
const swaggerUi = require('swagger-ui-express')

  

const aisCollector = AisCollector({
  fetchAisData: ais.dataFetchers.kystverket(process.env.AIS_DATA_URL),
  aisRepository: ais.repository,
  interval: 2000
})
aisCollector.start()

// start ais Import Service
if (process.env.ENABLE_AIS_FETCHER === 'true') {
  setInterval(importData, process.env.AIS_DATA_FETCH_INTERVAL)
  console.log(chalk.green('Ais Import Service started.'))
}

// init express application
if (process.env.ENABLE_API) {
  const app = express()

  app.options('*', cors())
  app.use(cors())

  app.use(morgan('combined'))

  app.use('/api', apiRouter)

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  app.use('/', express.static(path.join(__dirname, '/public')))

  app.listen(process.env.PORT, function () {
    console.log(
      chalk.green(`Web API Service started on port ${process.env.PORT}.`)
    )
  })
}
