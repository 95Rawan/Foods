const app = require('./app.js')
const port = process.env.PORT || 3000

app.listen(port, (err, res) => {
  if (err) {
    console.log(err)
  }
  console.log(`App listening at http://localhost:${port}`)
})
