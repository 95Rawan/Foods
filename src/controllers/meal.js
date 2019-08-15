const getMealData = require('../database/queries/getMealData')

exports.getMeal = (req, res) => {
  getMealData(req.params.id)
    .then(result => res.render('meal', { meals: result }))
    .catch(err => console.log(err))
}
