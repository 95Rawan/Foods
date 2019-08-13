const getHomeData = require('./../database/queries/getHomeData.js')

exports.getHome = (req, res) => {
  getHomeData
    .then(result =>
      res.render('home', {
        foods: result
      })
    )
    .catch(err => console.log(err))
}
