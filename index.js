const express = require('express')
const app = express()
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const bodyParser = require('body-parser')
require('dotenv').config()

const PORT = 8500

// Settings
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    if (req.query.edit) {
        const data = JSON.parse(fs.readFileSync('./voorhees.json'))
        const shirt = data.data.find(
            ({ id }) => id === req.query.edit
        )

        res.render('pages/index', {
            shirt,
            id: req.query.edit
        })
    } else {
        res.render('pages/index', {
            shirt: undefined,
            id: uuidv4()
        })
    }
})

app.get('/shoppingBag', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./voorhees.json'))
    const amount = data.data.length

    res.render('pages/cart', {
        data,
        amount
    })
})

app.post('/addShoppingBag', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./voorhees.json'))
    const shirt = data.data.find(({ id }) => id == req.body.id)
    
    if (shirt) {
        shirt.color = req.body.color
        shirt.gender = req.body.gender
        shirt.size = req.body.size
        shirt.text = req.body.text
    } else {
        data.data.push(req.body)
    }

    const stringData = JSON.stringify(data, null, 2)
    fs.writeFileSync('voorhees.json', stringData)

    res.redirect('/shoppingBag')
})

app.post('/emptyShoppingBag', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./voorhees.json'))
    data.data.length = 0

    const stringData = JSON.stringify(data, null, 2)
    fs.writeFileSync('voorhees.json', stringData)
    
    res.redirect('/shoppingBag')
})

// Listen to port
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})