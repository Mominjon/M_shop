const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./modules/routes')
const port = process.env.PORT || 8000




app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cors())
app.use(routes)
app.use('/images', express.static('images'));


app.listen(port, () => console.log("server run port " + port))