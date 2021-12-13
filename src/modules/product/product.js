const model = require('./model')
const jwt = require("../../lib/jwt")
const key = require("../../config")
module.exports = {
    products: async(req, res) => {
        try {
            const rows = await model.products()
            res.json(rows)
        }catch (e) {
            console.log(e)
        }
    },
    newproduct: async(req, res) => {
        try {
            const { token } = req.body
            if(token){
                let user  = jwt.verifyUser(token, key.SECRET_KEY)
                if(!user.role_user){
                    res.send("krish mumkin emas")
                }else {
                    const { product_name, product_text, product_photo } = req.body
                    const rows = await model.newproduct(product_name, product_text, product_photo)
                    res.send("ok")
                }
            }
        }catch (e) {
            console.log(e)
        }
    },
    update_product: async(req, res) => {
        try {
            const { token } = req.body
            if(token){
                let user  = jwt.verifyUser(token, key.SECRET_KEY)
                if(!user.role_user){
                    res.send("krish mumkin emas")
                }else {
                    const { product_name, product_text, product_photo , product_id} = req.body
                    const rows = await model.updateproduct(product_name, product_text, product_photo , product_id)
                    res.send("ok")
                }
            }
        }catch (e) {
            console.log(e)
        }
    },
    delete_product: async(req, res) => {
        try {
            const {product_id} = req.body
            let rows = await model.deleteproduct(product_id)
            res.send("ok")
        }catch(e) {
            console.log(e)
        }
    },
    like : async(req, res) => {
        try {
            const { product_id } = req.body
            const rows = await model.oneproduct(product_id)
            if(rows){
                const count = Number(rows.product_like) + 1
                console.log(rows)
                const likes = model.like_s(count, product_id)
                res.send("ok")
            } else {
                res.send(400)
            }
        }catch(e) {
            console.log(e)
        }
    },
    one_product: async (req, res) => {
        try {
            const { product_id } = req.body
            const rows = await model.oneproduct(product_id)
            res.send(rows)
        }catch(e) {
            console.log(e)
        }
    }
}