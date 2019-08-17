const dbConnection = require('../db_connection.js')

const postSignupData = (name, email, password) => {
  return dbConnection
    .query('insert into users (name, email, password) values ($1, $2, $3)', [
      name,
      email,
      password
    ])
    .then(res => res.rows)
    .catch(err => err)
}

module.exports = postSignupData
