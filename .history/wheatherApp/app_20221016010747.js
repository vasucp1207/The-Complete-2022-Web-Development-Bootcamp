const express = require('express')
const https = require('https')

const app = express()

// c576a49a461211243be914f5d00aea73
app.get('/', (req, res) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=c576a49a461211243be914f5d00aea73'
    https.get(url, (response) => {
        res
    })
})

app.listen(3000, () => {
    console.log('app is running on port: 3000')
})