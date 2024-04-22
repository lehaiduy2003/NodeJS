const express = require('express')
const { getHomepage, getABC, getBruh } = require('../controllers/homeController.js')
const router = express.Router()

//Gọi routes
router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/bruh', getBruh)

module.exports = router
