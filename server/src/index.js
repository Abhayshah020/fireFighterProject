const express = require('express')
const cors = require('cors')
const connect = require('./db/connect')
const loginRouter = require('./routes/loginRouter')
const registerRouter = require('./routes/registerRouter')
const rescueListRouter = require('./routes/rescueListRouter')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(registerRouter);
app.use(loginRouter);
app.use(rescueListRouter);

connect()


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
