import { socketServer } from "../../server.js";

const messages = [];

export default (socket) => {
  console.log("connected id: " + socket.id);
  socket.on("user", () => {
    socket.emit("all", messages);
  });
  socket.emit("all", messages);
  socket.on("new chat", (data) => {
    if (messages.length === 10) {
      messages.shift();
    }
    messages.push(data);
    socketServer.emit("all", messages);
  });
};
