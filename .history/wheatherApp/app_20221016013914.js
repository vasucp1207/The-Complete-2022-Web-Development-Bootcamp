const express = require('express')
const bodyParser = require('body-parser')
const https = require('https')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// c576a49a461211243be914f5d00aea73

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    const query = "london"
    const unit = "metric"
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=c576a49a461211243be914f5d00aea73&unit=' + unit
    https.get(url, (response) => {
        response.on('data', (data) => {
            const wheatherData = JSON.parse(data)
            const temp = wheatherData.main.temp
            const description = wheatherData.weather[0].description
            const icon = wheatherData.weather[0].icon
            const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The temp in london is " + temp + "</h1>")
            res.write("<h1>Wheather description: " + description + "</h1>")
            res.write("<img src=" + imgUrl +  ">")
        })
    })
})

app.listen(3000, () => {
    console.log('app is running on port: 3000')
})