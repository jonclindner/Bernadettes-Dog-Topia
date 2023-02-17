const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('I am ROOT!'))

router.post('/parks', controllers.createPark)

router.get('/parks', controllers.getAllParks)

router.get('/parks/:id', controllers.getParkById)

router.put('/parks/:id', controllers.updatePark)

router.delete('/parks/:id', controllers.deletePark)

router.post('/reviews', controllers.createReview)

router.get('/reviews', controllers.getAllReviews)

router.put('/reviews/:id', controllers.updateReview)

router.delete('/reviews/:id', controllers.deleteReview)

router.get('/reviews/:id', controllers.getReviewsByParkId)

module.exports = router
