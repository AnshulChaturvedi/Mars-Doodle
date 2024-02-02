
exports.handleDraw = (io, socket, data) => {
    // Broadcasting the drawing data to all connected clients
    io.emit('draw', data);
  };
  
 
  