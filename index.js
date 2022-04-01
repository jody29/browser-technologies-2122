const express = require('express')
const app = express()
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const bodyParser = require('body-parser')
require('dotenv').config()

const PORT = 8500

// Settings
app.set('view engine', 'ejs') // set EJS as view engine
app.set('views', path.join(__dirname, 'views')) // set the views directory path
app.use(express.static(__dirname + '/public')) // set the static file directory path

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    if (req.query.edit) { //check if there is an query in the url named edit that has data
        const data = JSON.parse(fs.readFileSync('./voorhees.json')) // read the json file
        const shirt = data.data.find( // find an object in the data array that has the same id as in the edit query
            ({ id }) => id === req.query.edit
        )

        res.render('pages/index', { // render the customization page with existing shirt preferences
            shirt,
            id: req.query.edit
        })
    } else { // if there is no id in the edit query
        res.render('pages/index', {
            shirt: undefined, // then make the shirt undefined
            id: uuidv4() // and create a new id 
        })
    }
})

app.get('/shoppingBag', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./voorhees.json')) // read the json fil
    const amount = data.data.length // get the lenght of the data array in the json file

    res.render('pages/cart', { // render the shoppingcart page
        data,
        amount
    })
})

app.post('/addShoppingBag', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./voorhees.json')) // read the json file
    const shirt = data.data.find(({ id }) => id == req.body.id) // find an object in the data array that has the same id as in the form
    
    if (shirt) { // if a shirt allready exist, then overwrite the data
        shirt.color = req.body.color
        shirt.gender = req.body.gender
        shirt.size = req.body.size
        shirt.text = req.body.text
    } else { // otherwise, just push the body of the form to the data array
        data.data.push(req.body)
    }

    const stringData = JSON.stringify(data, null, 2) // turn the changed array to json object
    fs.writeFileSync('voorhees.json', stringData) // overwrite the old json file

    res.redirect('/shoppingBag') // redirect to the shopping cart page
})

// Post request that empties the data array in the json file, so the shopping cart will be empty
app.post('/emptyShoppingBag', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./voorhees.json')) // read the json file
    data.data.length = 0 // length of the data array becomes 0

    const stringData = JSON.stringify(data, null, 2) // turn the changed array to json object
    fs.writeFileSync('voorhees.json', stringData) // overwrite the old json file
    
    res.redirect('/shoppingBag') // redirect to the shopping cart page
})

// Listen to port 8500
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})