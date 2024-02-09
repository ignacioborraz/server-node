document.querySelector("#newEvent").addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const data = { email, password };
  console.log(data);
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  let url = `/api/sessions/login`; //definimos la ruta
  fetch(url, options) //fetcheamos
    .then((res) => res.json()) //manejamos la respuesta
    .then((res) => res.session ? location.replace("/") : alert(res.message))
    .catch((err) => console.log(err));
});
