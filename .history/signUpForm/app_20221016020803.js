const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const { json } = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'signUp.html')
})

app.listen(3000, (req, res) => {
    console.log('app is running on port 3000')
})