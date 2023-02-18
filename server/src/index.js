const express = require('express')
const app = express()
const cors = require('cors')
const connect = require('./db/connect')
const loginRouter = require('./routes/loginRouter')
const registerRouter = require('./routes/registerRouter')
const rescueListRouter = require('./routes/rescueListRouter')
const userRouter = require('./routes/userRouter')
const profileRouter = require('./routes/profileRouter')
const messageRouter = require('./routes/messageRouter')
const mapRouter = require('./routes/mapRouter')
require('dotenv').config()

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
  cors: {
      origin: "*"
  },
});

io.on('connection', (socket) => {
  console.log("socket is connected")
  socket.on('rescueRequest', async(rescueRequest)=>{
    io.emit('rescueRequest', rescueRequest)
    // console.log(rescueRequest)
  })
});

app.use(express.json())
app.use(cors())
app.use(registerRouter);
app.use(loginRouter);
app.use(rescueListRouter);
app.use(userRouter);
app.use(profileRouter);
app.use(messageRouter);
app.use(mapRouter);

connect()


server.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
