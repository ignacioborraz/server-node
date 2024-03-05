import args from "./args.utils.js";
import dotenv from "dotenv";

const environment = args.mode;
const path = environment === "dev" ? "./.env.dev" : "./.env.prod";
dotenv.config({ path });

export default {
  PORT: process.env.PORT,
  DB_LINK: process.env.DB_LINK,
  SECRET: process.env.SECRET,
  SECRET_KEY: process.env.SECRET_KEY,
};
