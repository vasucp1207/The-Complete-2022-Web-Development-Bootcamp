const express = require('express')
const https = require('https')

const app = express()

app.get('/', (req, res) => {
    https.get('', (res) => {
        
    })
})

app.listen(3000, () => {
    console.log('app is running on port: 3000')
})