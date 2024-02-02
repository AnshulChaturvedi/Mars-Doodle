const socketIO = require('socket.io');
const drawController = require("../Controllers/drawController")

module.exports = (server) => {
    const io = socketIO(server);
  
    io.on('connection', (socket) => {
      console.log('User connected');
  
      socket.on('draw', (data) => {
        console.log('Drawing event received:', data);
        
      });
  
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  
    return io;
  };