const Park = require('../models/park')

const createPark = async (req, res) => {
  try {
    const park = await new Park(req.body)
    await park.save()
    return res.status(201).json({
      park
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllParks = async (req, res) => {
  try {
    const parks = await Park.find()
    return res.status(200).json({ parks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPark,
  getAllParks
}
