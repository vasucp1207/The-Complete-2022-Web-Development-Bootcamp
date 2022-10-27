const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signUp.html')
})

app.post('/', (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data)

    const url = 'https://us8.api.mailchimp.com/3.0/lists/172b793a89'
    const options = {
        method: "POST",
        auth: "vasu:b48d17cb57a53fce7a98350ccf1381b8-us8"
    }

    const request = https.request(url, options, function(response){

        if(response.statusCode === 200) {
            res.sendFile(__dirname + '/success.html')
        } else {
            res.sendFile(__dirname + '/failure.html')
        }
                  
        response.on("data", function(data){
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end()
})

app.post('/failure', function(req, res){
    res.redirect('/')
})

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log('app is running on port 3000')
})

// b48d17cb57a53fce7a98350ccf1381b8-us8
// 172b793a89