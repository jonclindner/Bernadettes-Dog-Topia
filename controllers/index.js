const Park = require('../models/park')
const Review = require('../models/review')

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
const getParkById = async (req, res) => {
  try {
    const { id } = req.params
    const park = await Park.findById(id)
    if (park) {
      return res.status(200).json({ park })
    }
    return res.status(404).send('Park with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
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
const updatePark = async (req, res) => {
  try {
    const park = await Park.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(park)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPark,
  getAllParks,
  getAllReviews,
  getParkById,
  updatePark
}