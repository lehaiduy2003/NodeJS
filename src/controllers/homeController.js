const connection = require('../configs/Database.js')
const { getAllUsers, createUser, getUser, updateUser, deleteUser } = require('../services/CRUDService.js')

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
    let results = await createUser(req.body.email, req.body.name, req.body.city)
    res.redirect('/')

}

const postUpdateUser = async (req, res) => {
    let results = await updateUser(req.body.email, req.body.name, req.body.city, req.params.id)
    res.redirect('/')

}

const postDeleteUser = async (req, res) => {
    let results = await deleteUser(req.params.id)
    res.redirect('/')
}


const getUpdatePage = async (req, res) => {
    let results = await getUser(req.params.id);
    let user = results && results.length > 0 ? results[0] : {}
    res.render('update.ejs', { userInfo: user })
}

module.exports = {
    getHomepage, getABC, getBruh, postCreateUser, createUserPage, getUpdatePage, postUpdateUser, postDeleteUser
}