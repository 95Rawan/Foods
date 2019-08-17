const dbConnection = require('./../db_connection.js')

const getSigninData = email => {
  return dbConnection
    .query('select email, password from users where email = $1', [email])
    .then(res => res.rows)
    .catch(err => err)
}

module.exports = getSigninData
