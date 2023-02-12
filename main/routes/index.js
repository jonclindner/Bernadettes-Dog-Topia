const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('I am ROOT!'))

router.post('/parks', controllers.createPark)

router.get('/parks', controllers.getAllParks)

module.exports = router
