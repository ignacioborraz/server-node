import { Router } from "express";
import usersRouter from "./users.router.api.js";
import EventsRouter from "./events.router.api.js";
import ordersRouter from "./orders.router.api.js";
import sessionsRouter from "./sessions.router.api.js";
import CustomRouter from "../CustomRouter.js";

const events = new EventsRouter()
export default class ApiRouter extends CustomRouter {
  init() {
    this.router.use("/users", usersRouter);
    this.router.use("/events", events.getRouter());
    this.router.use("/orders", ordersRouter);
    this.router.use("/sessions", sessionsRouter);
  }
}
