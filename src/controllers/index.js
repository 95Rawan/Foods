const express = require('express')
const router = express.Router()
const home = require('./home.js')
const meal = require('./meal.js')
const postMealForm = require('./postMealForm.js')
const signup = require('./signup.js')

router.get('/', home.getHome)
router.get('/meal/:id', meal.getMeal)
router.get('/postMealForm', postMealForm.getPostMealForm)
router.post('/postMealForm', postMealForm.postMeal)
router.get('/signup', signup.getSignup)
router.post('/signup', signup.postSignup)
module.exports = router
