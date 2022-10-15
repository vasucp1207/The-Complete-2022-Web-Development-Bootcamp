const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/about', (req, res) => {
    res.send('<h1>Hi my name is vasu singh</h1>')
})

app.listen(3000, () => {
    console.log(`server is running on port: 3000`)
})