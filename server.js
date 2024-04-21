const express = require('express') //commonjs
const app = express() // app của express
const port = 8081

//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('Check abc')
})

app.get('/bruh', (req, res) => {
    res.send('<h1>bruh</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})