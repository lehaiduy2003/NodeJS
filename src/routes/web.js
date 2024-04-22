const express = require('express')
const router = express.Router()

//khai báo route
router.get('/', (req, res) => {
    res.send('Nodemon')
})

router.get('/abc', (req, res) => {
    //res.send('Check abc')
    res.render('sample.ejs')
})

router.get('/bruh', (req, res) => {
    res.send('<h1>bruh</h1>')
})

module.exports = router
