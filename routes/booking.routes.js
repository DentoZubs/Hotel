const express = require('express')
const router = express.Router()
const {booking} = require('../controllers/bookings.controllers')

router.post('/createCustomers', booking)


module.exports = router


