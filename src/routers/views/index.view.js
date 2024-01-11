import { Router } from "express";

import eventsRouter from "./events.view.js";
import usersRouter from "./users.view.js";
import events from "../../data/fs/events.fs.js";

const viewsRouter = Router();

viewsRouter.get("/", (req, res, next) => {
  try {
    const date = new Date();
    const all = events.readEvents();
    return res.render("index", { events: all, date, title: "HOME" });
  } catch (error) {
    next(error);
  }
});
viewsRouter.use("/events", eventsRouter);
viewsRouter.use("/users", usersRouter);

export default viewsRouter;
