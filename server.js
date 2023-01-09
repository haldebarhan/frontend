const express = require('express')
const path = require('path')

const app = express()
const port = 3200

app.use(express.static('dist/frontend'))
app.use('/*', (req, res)=> res.sendFile(__dirname + '/dist/frontend/index.html'))

app.listen(port, ()=> {
    console.log('Server running on port ', port)
})