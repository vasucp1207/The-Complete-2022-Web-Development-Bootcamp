const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get()

app.listen(3000, (req, res) => {
    console.log('app is running on port 3000')
})