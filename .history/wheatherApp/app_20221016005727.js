const express = require('express')
const http = require
const app = express()

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3000, () => {
    console.log('app is running on port: 3000')
})