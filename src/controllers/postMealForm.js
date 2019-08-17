const postMealData = require('../database/queries/postMealData.js')
const path = require('path')
const fs = require('fs')
const alert = require('alert-node')

exports.getPostMealForm = (req, res) => {
  const endpoint = req.originalUrl
  const filePath = path.join(__dirname, `../views${endpoint}.hbs`)

  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, {
        'Content-Type': 'text/html'
      })
      res.end('<h1>Server Error</h1>')
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(file)
    }
  })
}

exports.postMeal = (req, res) => {
  const { foodname, country, img, description } = req.body
  postMealData(foodname, country, img, description)
    .then(() => alert('The meal was successfuly added'))
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
}
