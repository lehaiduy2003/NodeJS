require('dotenv').config() //.env
const mysql = require('mysql2/promise')

//create database connection
const connection = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

// const pool = mysql.createPool({
//     host: process.env.DB_HOSTNAME,
//     port: process.env.DB_PORT || 3306,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     waitForConnections : true,
//     connectionLimit : 10,
//     queueLimit : 0
// })

module.exports = connection //, pool