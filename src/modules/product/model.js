const {
    fetch,
    fetchAll
} = require('../../lib/postgres')

const NEW_product = `INSERT INTO product(product_name, product_text, product_photo,
    product_like) VALUES($1, $2, $3, 0) RETURNING * `

const ALL_product = `
    SELECT * FROM product
`
const update_product = `
    UPDATE product SET product_name = $1, product_text = $2, product_photo = $3 where product_id = $4
`
const delete_product = `
    DELETE FROM product WHERE product_id = $1
`
const like_product = `
    UPDATE product SET product_like = $1 WHERE product_id = $2
`
const one_product = `
    SELECT * FROM product WHERE product_id = $1
`
const newproduct = (product_name, product_text, product_photo) => fetch(NEW_product, product_name, product_text, product_photo)

const products = () => fetchAll(ALL_product)

const oneproduct = (id) => fetch(one_product, id)

const updateproduct = (product_name, product_text, product_photo, product_id) => fetch(update_product, product_name, product_text, product_photo, product_id)

const deleteproduct = (product_id) => fetch(
    delete_product, product_id
)
const like_s = (product_like, product_id) =>  fetch(like_product, product_like, product_id)

module.exports = {
    newproduct,
    products,
    updateproduct,
    deleteproduct,
    like_s,
    oneproduct
}