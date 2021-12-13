const {
    fetch,
    fetchAll
} = require('../../lib/postgres')

const NEW_user = `INSERT INTO users(user_name, user_surname, user_password,
    role_user) VALUES($1, $2, $3, $4) RETURNING * `

const ALL_user = `
    SELECT * FROM users
`

const serach_user = `
    SELECT * FROM users WHERE user_name = $1 AND user_password = $2
`
const newuser = (name, surname, password, role) => fetch(NEW_user, name, surname, password, role)

const users = () => fetchAll(ALL_user)

const search = (user_name, user_password) => fetch(serach_user, user_name, user_password)

module.exports = {
    newuser,
    users,
    search
}