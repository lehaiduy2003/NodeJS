const connection = require('../configs/Database.js')
const getHomepage = (req, res) => {
    return res.render('homepage.ejs')
}

const getABC = (req, res) => {

    res.render('sample.ejs')
}

const getBruh = (req, res) => {
    res.send('<h1>bruh</h1>')
}
const createUserPage = (req, res) => {
    res.render('create.ejs')
}
const createUser = async (req, res) => {
    //console.log(req.body)
    // let email = req.body.email
    // let name = req.body.name
    // let city = req.body.city

    //let { email, name, city } = req.body

    let [results, fields] = await (await connection).execute(
        `INSERT INTO User (email, name, city)
        VALUES(?, ?, ?)`,
        [req.body.email, req.body.name, req.body.city]
        // (err, results) => {
        //     console.log(results);
        //     res.send("create user succeed!")
        // }
    )

    console.log(results)

    res.send('create user succeed')
    // connection.query(
    //     'SELECT * FROM User u',
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //         //console.log(fields); // fields contains extra meta data about results, if available
    //     },
    //const [results, fields] = await (await connection).execute('SELECT * FROM User')
    //console.log(results);

}

module.exports = {
    getHomepage, getABC, getBruh, createUser, createUserPage
}