const dbConnection = require('./../db_connection')

const getHomeData = dbConnection
  .query('select foodName, img from foods')
  .then(res => res.rows)
  .catch(err => console.log(err))

module.exports = getHomeData
