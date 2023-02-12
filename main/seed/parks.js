const db = require('../db')
const Park = require('../models/park')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const parks = [
    {
      name: 'Barnum',
      location: 'West Denver - Barnum Neighborhood',
      material: 'Gravel',
      description: 'Description Placeholder - Barnum',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png'
    },
    {
      name: 'Berkely',
      location: 'West Denver - Berkely Neighborhood',
      material: 'Dirt',
      description: 'Description Placeholder - Berkely',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png'
    },
    {
      name: 'Fuller',
      location: 'Five Points - Whittier Neighborhood',
      material: 'Dirt',
      description: 'Description Placeholder - Fuller',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png'
    }
  ]

  await Park.insertMany(parks)
  console.log('Created some dog parks')
}
const run = async () => {
  await main()
  db.close()
}

run()
