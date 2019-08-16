const dbConnection = require('./../db_connection.js')

const postMealData = (foodName, country, img, description) => {
  return dbConnection
    .query(
      'insert into foods (foodname, country, img, description) values ($1, $2, $3, $4)',
      [foodName, country, img, description]
    )
    .catch(err => console.log(err))
}

module.exports = postMealData
