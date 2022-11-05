const express = require('express')
const bodyParser = require('body-parser')
const getDate = require('./date.js')

const app = express()

const items = ["hi", "web development is love"]
const workItems = []

app.set('view engine', 'ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'))

app.get('/', function(req, res) {
    
    const day = getDate()

    // pass the information using ejs
    res.render('list', { day: day, items: items })
})

app.post('/', function(req, res) {

    const item = req.body.newItem
    const page = req.body.list
    if(page === 'work') {
        workItems.push(item)
        res.redirect('/work')
    } else {
        items.push(item)
        res.redirect('/')
    }
})

app.get('/work', function(req, res) {
    res.render('list', { day: "work", items: workItems })
})

app.get('/about', function(req, res) {
    res.render('about')
})

app.listen(3000, function() {
    console.log('server started on port 3000')
})