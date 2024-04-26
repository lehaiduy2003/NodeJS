const express = require('express')
const {
    getHomepage, getABC, getBruh,
    postCreateUser, createUserPage, getUpdatePage,
    postUpdateUser, postDeleteUser
} = require('../controllers/homeController.js')

const router = express.Router()

//GET routes
router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/bruh', getBruh)
router.get('/create', createUserPage)
router.get('/update/:id', getUpdatePage)

//POST routes
router.post('/create-user', postCreateUser)
router.post('/update-user/:id', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)

module.exports = router
