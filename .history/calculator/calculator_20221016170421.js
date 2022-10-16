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

app.post('/', function(req, res){
    var a = Number(req.body.num1)
    var b = Number(req.body.num2)
    var sum = a + b
    res.send(`The sum of two num is ${sum}`)
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})