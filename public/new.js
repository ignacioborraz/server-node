const socket = io();

document.querySelector("#newEvent").addEventListener("click", (event) => {
  event.preventDefault()
  const title = document.querySelector("#name").value;
  const poster = document.querySelector("#poster").value;
  const price = document.querySelector("#price").value;
  const capacity = document.querySelector("#capacity").value;
  const place = document.querySelector("#place").value;
  const date = document.querySelector("#date").value;
  const data = {};
  title && (data.name = title);
  poster && (data.poster = poster);
  price && (data.price = price);
  capacity && (data.capacity = capacity);
  place && (data.place = place);
  date && (data.date = date);
  console.log(data);
  socket.emit("new event", data);
});
