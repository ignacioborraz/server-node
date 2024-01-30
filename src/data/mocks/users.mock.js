import "dotenv/config.js";
import dbUtils from "../../utils/db.utils.js";
import { faker } from "@faker-js/faker";
import User from "../mongo/models/user.model.js";

dbUtils();

async function createUser() {
  const name = faker.person.firstName().toLowerCase();
  const photo = faker.image.avatar();
  const age = faker.number.int({ min: 14, max: 50 });
  let user = {
    email: faker.person.lastName().toLowerCase() + name + age + "@coder.com",
    password: "hola1234",
    name,
    role: 0,
    photo,
    age,
  };
  user = await User.create(user);
  console.log(user._id);
}

for (let i = 0; i <= 5000; i++) {
  createUser();
}
