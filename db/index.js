const mongoose = require('mongoose')

let MONGODB_URI = 'mongodb://127.0.0.1:27017/ParkDatabase'

mongoose
  .connect(MONGODB_URI)
  .then(() => {})
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
