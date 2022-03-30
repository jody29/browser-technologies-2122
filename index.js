const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

const PORT = 8500

// Settings
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Customize T-Shirt'
    })
})

// Listen to port
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})