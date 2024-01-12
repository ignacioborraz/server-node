import { socketServer } from "../../server.js";

const messages = [];

export default (socket) => {
  console.log("connected id: " + socket.id);
  socket.on("user", () => {
    socket.emit("all", messages);
  });
  socket.emit("messages", messages);
  socket.on("new chat", (data) => {
    messages.push(data);
    socketServer.emit("all", messages);
  });
}