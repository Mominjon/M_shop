const model = require('./model')
const jwt = require("../../lib/jwt")
const key = require("../../config")
module.exports = {
    users: async(req, res) => {
        try {
            const { token } = req.body
            const role = jwt.verifyUser(token, key.SECRET_KEY)
            if(!role.role_user) {
                res.send("krish mumkin emas")
            }else {
                const rows = await model.users()
                res.json(rows)
            }
        } catch(e) {
            console.log(e)
        }
    },
    registr: async (req, res) => {
        try {
            const { username, surname, password, role} = req.body

            const rows = await model.newuser(username, surname, password, role)

            res.send(jwt.signUser(rows, key.SECRET_KEY))
        }catch (e) {
            console.log(e)
        }
    },
    login: async (req, res) => {
        try {
            const {username, userpassword} = req.body

            const rows = await model.search(username, userpassword)
            if(!rows) {
                res.send("user not faund")
            }else {
                res.send([jwt.signUser(rows, key.SECRET_KEY), rows.role_user])
            }
        }catch (e) {
            console.log(e)
        }
    },
    tanib_olish: async(req, res) => {
        try {
            const { jwts } = req.body

            let user = jwt.verifyUser(jwts, key.SECRET_KEY)
            console.log(user)
            const rows = await model.search(user.user_name, user.user_password)

            if(!rows) {
                res.send("user not faund")
            }else {
                res.send(rows)
            }
        }catch (e) {
            console.log(e)
        }
    }
    
}