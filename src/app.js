const path = require('path')
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const router = require('./controllers')

app.use(express.static(path.join(__dirname, '../public/')))
app.use(express.urlencoded())
app.use(express.json())

app.set('view', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, 'views', 'partials')
  })
)

app.use(router)

module.exports = app
