const mongoose = require('mongoose')
const models = require('./models')

const { DB_USER, DB_PASSWORD, DB_URI } = process.env

const options = {
  user: DB_USER,
  pass: DB_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.Promise = global.Promise

/*
models.AisPosition.syncIndexes()
  .then(console.log('Index has been updated!'))
  .catch(err => {
    console.log('SYNC' + err.message)
    process.exit(1)
  })
*/
mongoose
  .connect(
    DB_URI,
    options
  )
  .then(conn => {
    console.log('Connection to database established.')
  })
  .catch(err => {
    console.log(`Error: ${err.message}`)
    console.log('Shutting down...')
    process.exit(1)
  })

module.exports = models
