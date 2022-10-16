const express = require('express')
const https = require('https')

const app = express()

// c576a49a461211243be914f5d00aea73
app.get('/', (req, res) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=c576a49a461211243be914f5d00aea73'
    https.get(url, (response) => {
        response.on('data', (data) => {
            const wheatherData = JSON.parse(data)
            const temp = wheatherData.main.temp
            const description = wheatherData.weather[0].description
            const icon = wheatherData.weather[0].icon
            res.write("<h1>The temp in london is " + temp + "</h1>")
            res.write("<h1>Wheather description: " + description + "</h1>")
            res.write("<img src={} />")
        })
    })
})

app.listen(3000, () => {
    console.log('app is running on port: 3000')
})