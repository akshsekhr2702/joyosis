const io = require("socket.io")(3000,{
  cors:{origin:"http://localhost:3000",
    methods:["GET","POST"],}
})

io.on("connection",(socket)=>{
  console.log("User is connected")
})

console.log('hlo')