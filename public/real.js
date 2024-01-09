const socket = io();

socket.on("events", (data)=> {
  document.querySelector("#sectionReal").innerHTML = data.events.map(each=> `
  <div class="card m-2" style="width: 320px;">
  <img src="${each.poster}" style="height: 200px;" class="card-img-top object-fit-cover" alt="${each.name}">
  <div class="card-body d-flex flex-column justify-content-center">
    <h5 class="card-title text-center">${each.name}</h5>
    <p class="card-text text-center">
      ${each.place} ${each.date} ${each.price}USD
    </p>
    <button type="button" class="btn btn-danger">ADD TO CART!</button>
  </div>
  </div>
`)})