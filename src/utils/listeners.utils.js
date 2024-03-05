process.on("exit", (code) => {
  console.log("Se mostrara justo ante de salir del proceso");
  console.log({ code });
});

process.on("uncaughtException", (exception) => {
  console.log("Atrapa todas las excepciones no controladas");
  console.log({ exception });
});

process.on("message", (message) => {
  console.log("Cuando reciba un mensaje de otro proceso");
  console.log({ message });
});

console();
process.exit(1);
