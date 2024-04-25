const connection = require('../configs/Database.js')
const { getAllUsers, createUser, getUpdateUser, updateUser } = require('../services/CRUDService.js')

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('homepage.ejs', { listUsers: results })
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
const postCreateUser = async (req, res) => {

    let results = await createUser(req, res)

    //console.log(results)
    res.send('create user succeed')

}

const postUpdateUser = async (req, res) => {

    let results = await updateUser(req, res)

    console.log(results)
    res.send('update user succeed')

}


const getUpdatePage = async (req, res) => {
    let results = await getUpdateUser(req, res);
    let user = results && results.length > 0 ? results[0] : {}
    res.render('update.ejs', { userInfo: user })
}

module.exports = {
    getHomepage, getABC, getBruh, postCreateUser, createUserPage, getUpdatePage, postUpdateUser
}