const dbConnection = require('./../db_connection')

const getMealData = id => {
  return dbConnection
    .query(
      'select foodName, country, img, description from foods where id = $1',
      [id]
    )
    .then(res => res.rows)
    .catch(err => err)
}
module.exports = getMealData
