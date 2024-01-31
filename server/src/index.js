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
const path = require('path');
require('dotenv').config()

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
  cors: {
      origin: "*"
  },
});

app.use(express.static("../../client/build"));

io.on('connection', (socket) => {
  console.log("socket is connected")
  socket.on('rescueStatus', async(rescueStatus)=>{
    io.emit('rescueStatus', rescueStatus)
  })
  socket.on('imageStatus', async(imageStatus)=>{
    io.emit('imageStatus', imageStatus)
  })
  socket.on('rescueList', async(rescueList)=>{
    io.emit('rescueList', rescueList)
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

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

connect()


server.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
