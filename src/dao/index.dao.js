//import command from "../config/arguments.js";

const command = { persistence: "MEMORY" };
let dao = {};

switch (command.persistence) {
  case "MEMORY":
    console.log("persistence: memory");
    const { default: EventsMemory } = await import("./memory/events.memory.js");
    //const { default: CartsMemory } = await import("./memory/carts.memory.js");
    const { default: UsersMemory } = await import("./memory/users.memory.js");
    dao = { events: EventsMemory, /* carts: CartsMemory, */ Users: UsersMemory };
    console.log(dao);
    break;
  case "FS":
    break;
  default:
    break;
}

export default dao;
