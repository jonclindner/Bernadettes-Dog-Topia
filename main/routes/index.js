const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('I am ROOT!'))

router.post('/parks', controllers.createPark)

router.get('/parks', controllers.getAllParks)

router.get('/reviews', controllers.getAllReviews)

router.get('/parks/:id', controllers.getParkById)

router.put('/parks/:id', controllers.updatePark)

module.exports = router
