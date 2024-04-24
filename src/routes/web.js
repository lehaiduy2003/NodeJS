const express = require('express')
const { getHomepage, getABC, getBruh , createUser, createUserPage} = require('../controllers/homeController.js')
const router = express.Router()

//Gọi routes
router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/bruh', getBruh)
router.post('/create-user', createUser)
router.get('/create', createUserPage)
module.exports = router
