const postSignupData = require('../database/queries/postSignupData')
const alert = require('alert-node')
const path = require('path')
const fs = require('fs')

exports.getSignup = (req, res) => {
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

exports.postSignup = (req, res) => {
  const { name, email, password } = req.body
  postSignupData(name, email, password)
    .then(() => alert('Signup was successful'))
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
}
