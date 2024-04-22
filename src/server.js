require('dotenv').config() //.env
const express = require('express') //commonjs
const path = require('path') //commonjs
const mysql = require('mysql2')

const configViewEngine = require('./configs/ViewEngine.js')
const webRoutes = require('./routes/web.js')

const app = express() // app của express
const port = process.env.PORT || 8888; // const port = 8081 // => hardcode
const hostname = process.env.HOSTNAME; // const hostname = 'localhost' // => hardcode

console.log(port)

//Config template engine && static file
configViewEngine(app);

//test connection
const connection = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

// A simple SELECT query
connection.query(
    'SELECT * FROM User u',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        //console.log(fields); // fields contains extra meta data about results, if available
    }
);

//khai báo route
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})