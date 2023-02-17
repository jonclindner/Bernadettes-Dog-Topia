const Park = require('../models/park')
const Review = require('../models/review')
//Create
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
//Read
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
//Read
const getAllParks = async (req, res) => {
  try {
    const parks = await Park.find()
    return res.status(200).json({ parks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
//Update
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
//Delete
const deletePark = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Park.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Park has been deleted')
    }
    throw new Error('Park not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
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
const getReviewsByParkId = async (req, res) => {
  try {
    const reviews = await Review.find({ park_id: req.params.id })
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Review.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Review has been deleted')
    }
    throw new Error('Review not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPark,
  getAllParks,
  getParkById,
  updatePark,
  deletePark,
  createReview,
  getAllReviews,
  updateReview,
  deleteReview,
  getReviewsByParkId
}
