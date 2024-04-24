const express = require('express') //commonjs

const connection = require('./configs/Database.js')
const configViewEngine = require('./configs/ViewEngine.js')
const webRoutes = require('./routes/web.js')

const app = express() // app của express
const port = process.env.PORT || 8888; // const port = 8081 // => hardcode
const hostname = process.env.HOSTNAME; // const hostname = 'localhost' // => hardcode

//config req.body
app.use(express.json()) //for json
app.use(express.urlencoded({ extended: true })) //for form data

console.log(port)

//Config template engine && static file
configViewEngine(app);

// A simple SELECT query
// connection.query(
//     'SELECT * FROM User u',
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server
//         //console.log(fields); // fields contains extra meta data about results, if available
//     }
//     const [results, fields] = connection.query
// );

//khai báo route
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})