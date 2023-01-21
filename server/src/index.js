const express = require('express')
const cors = require('cors')
const connect = require('./db/connect')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

connect()


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
