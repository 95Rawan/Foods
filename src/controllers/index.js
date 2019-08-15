const express = require('express')
const router = express.Router()
const home = require('./home.js')
const meal = require('./meal.js')

router.get('/', home.getHome)
router.get('/meal/:id', meal.getMeal)
module.exports = router
