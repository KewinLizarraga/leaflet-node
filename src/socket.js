module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("New user");
    socket.on("userCoordinates", (coords) => {
      socket.broadcast.emit("newUserCoordinates", coords);
    });
  });
};
