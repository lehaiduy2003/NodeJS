const getHomepage = (req, res) => {
    res.render('sample.ejs')
}

const getABC = (req, res) => {
    res.send('Check abc')
}

const getBruh = (req, res) => {
    res.send('<h1>bruh</h1>')
}

module.exports = {
    getHomepage, getABC, getBruh
}