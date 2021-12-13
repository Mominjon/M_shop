const express = require('express')

const user = require('./users/user')
const product = require("./product/product")
const multer = require("./multer/multer")
const router = express.Router()

router
    .post('/users', user.users)
    .post("/newuser", user.registr)
    .post("/login", user.login)
    .post("/tanish", user.tanib_olish)
    // product 
    .get("/allproduct", product.products)
    .post("/newproduct", product.newproduct)
    .post("/updateproduct", product.update_product)
    .post("/delete", product.delete_product)
    .post("/oneproduct", product.one_product)
    .post("/likes", product.like)
    .post("/upload_img", multer.upload_img)
module.exports = router