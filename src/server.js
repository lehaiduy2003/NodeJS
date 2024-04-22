require('dotenv').config() //.env
const express = require('express') //commonjs
const path = require('path') //commonjs

const configViewEngine = require('./configs/ViewEngine.js')
const webRoutes = require('./routes/web.js')

const app = express() // app của express
const port = process.env.PORT || 8888; // const port = 8081 // => hardcode
const hostname = process.env.HOSTNAME; // const hostname = 'localhost' // => hardcode

console.log(port)

//Config template engine && static file
configViewEngine(app);

//khai báo route
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})