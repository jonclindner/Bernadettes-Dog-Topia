const db = require('../db')
const Review = require('../models/review')
const Park = require('../models/park')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const barnum = await Park.find({ name: 'Barnum' })
  const berkely = await Park.find({ name: 'Berkely' })
  const fuller = await Park.find({ name: 'Fuller' })

  const reviews = [
    {
      user: 'Test User One',
      rating: 4,
      comment: 'Test comment one',
      park_id: barnum[0]._id
    },
    {
      user: 'Test User Two',
      rating: 3,
      comment: 'Test comment two',
      park_id: berkely[0]._id
    },
    {
      user: 'Test User three',
      rating: 5,
      comment: 'Test comment three',
      park_id: fuller[0]._id
    }
  ]

  await Review.insertMany(reviews)
}
const run = async () => {
  await main()
  db.close()
}

run()
