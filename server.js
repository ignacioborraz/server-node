import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import pathHandler from "./src/middlewares/pathHandler.js";

//server
const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => console.log("server ready on port " + PORT);
server.listen(PORT, ready);

//middlewares
server.use(
  cors({
    origin: true,
    credentials: true,
  })
);
server.use(cookieParser(process.env.SECRET));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(morgan("dev"));

//endpoints
server.use("/", router);
server.use(errorHandler);
server.use(pathHandler);
