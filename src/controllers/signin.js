const getSigninData = require('./../database/queries/getSigninData')
const path = require('path')
const fs = require('fs')
const sign = require('jsonwebtoken')

exports.getSignin = (req, res) => {
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

exports.postSignin = (req, res) => {
  const { email, password } = req.body
  getSigninData(email)
    .then(result => {
      const token = sign(result[0], process.env.SECRET)
      res.writeHead(302, {
        Location: '/postMealForm',
        'Set-Cookie': `token=${token}`
      })
      res.end()
    })
    .catch(err => err)
}
