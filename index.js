require('dotenv').config()
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = process.env.APP_PORT
const bookingRoute = require('./routes/booking.routes')


app.use(bodyParser.json())
app.use(bookingRoute)

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.post('/createCustomers', function (req, res) {
//   res.status(200).json({
//     message:'booking successful. have a good time'})
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  