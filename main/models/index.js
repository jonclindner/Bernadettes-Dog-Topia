const mongoose = require('mongoose')
const ReviewSchema = require('./review')
const ParkSchema = require('./park')

const Review = mongoose.model('Review', ReviewSchema)
const Park = mongoose.model('Park', ParkSchema)

module.exports = {
  Review,
  Park
}
