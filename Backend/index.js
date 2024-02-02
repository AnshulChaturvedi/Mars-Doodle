const express = require("express")
const app = express()
const cors = require("cors")
const dbConnect = require("./config/database")
let httpServer = require("http").createServer(app);




app.use(cors);
require("dotenv").config();
const PORT = 4000

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  }
});

//middlewares
app.use(express.json());
const userroutes = require("./routes/auth")
app.use("/api/v1", userroutes)
app.use(express.static("public"));

let connections = [];

io.on('connection', (socket) => {
  connections.push(socket);
  console.log(`${socket.id} has connected`);

  // socket.on("draw", (data) => {
  //   connections.forEach(con => {
  //     if (con.id !== socket.id) {
  //       con.emit("ondraw", { point: data.point, prevPoint: data.prevPoint })
  //     }
  //   })
  // });

  // socket.on("chat message", (inputMessage) => {
  //   console.log("msg aya backen me")
  //   connections.forEach(con => {
  //     console.log("message gya backen se")
  //     con.emit("chat message", { msg: inputMessage })
  //   })
  // })

  socket.on("userJoined", (roomData) => {
    const { generatedCode, email } = roomData
    console.log(`${socket.id} has joined room ${generatedCode}`);
    socket.join(generatedCode);

    socket.on("draw", (data) => {
      // Emit the draw event to all users in the joined room
      io.to(data.generatedCode).emit("ondraw", { point: data.point, prevPoint: data.prevPoint });
    });

    socket.on("chat message", (inputMessage) => {
      // Emit the chat message event to all users in the joined room
      io.to(inputMessage.generatedCode).emit("chat message", { msg: inputMessage.msg });
    });

  })


  socket.on('disconnect', (reason) => {
    console.log(`${socket.id} has disconnected`);
    connections.filter((con) => con.id !== socket.id);
  })
})


httpServer.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});


dbConnect();





