const socket = io();

const user = {};

Swal.fire({
  title: "Type your nickname:",
  input: "text",
  inputValidator: (nickname) => !nickname && "Type your nickname!",
  allowOutsideClick: false,
}).then((obj) => {
  user.name = obj.value;
  document.querySelector("#name").innerHTML = obj.value;
  socket.emit("user", user);
});

const newChat = document.querySelector("#text");
newChat.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    socket.emit("new chat", { name: user.name, message: newChat.value });
    newChat.value = "";
  }
});

socket.on("all", (data) => {
  data = data
    .map(
      (each) =>
        `<p class="p-2 m-2 my-1"><span class="fw-bold">${each.name}:</span> ${each.message}</p>`
    )
    .join("");
  document.querySelector("#chats").innerHTML = data;
});
