const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post('/', function(req, res){
    var a = Number(req.body.num1)
    var b = Number(req.body.num2)
    var sum = a + b
    res.send(`The sum of two num is ${sum}`)
})

app.post('/bmi', function(req, res){
    var a = flo(req.body.height)
    var b = Number(req.body.weight)
    var bmi = a / (b * b)
    res.send(`The sum of two num is ${bmi}`)
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})