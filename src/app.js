require('dotenv').config({ silent: true })
require('./config')

const path = require('path')
const cors = require('cors')
const express = require('express')
const apiRouter = require('./routes/api-router')
const morgan = require('morgan')

const { swaggerSpec } = require('./config/docs')
const swaggerUi = require('swagger-ui-express')

const { aisDataCollectors } = require('./services/ais-provider-service')

// starts all enabled collectors
aisDataCollectors.start()

if (process.env.ENABLE_API) {
  const app = express()

  app.options('*', cors())
  app.use(cors())

  app.use(morgan('combined'))

  app.use('/api', apiRouter)

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  app.use('/', express.static(path.join(__dirname, '/public')))

  app.listen(process.env.PORT, function () {
    console.log(`Web API Service started on port ${process.env.PORT}.`)
  })
}
