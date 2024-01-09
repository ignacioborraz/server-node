import { Router } from "express";
import events from "../../data/fs/events.fs.js";

const eventsRouter = Router();

eventsRouter.get("/", async (req, res, next) => {
  try {
    const all = await events.readEvents();
    return res.render("events", { events: all, title: "EVENTS" });
  } catch (error) {
    next(error);
  }
});
eventsRouter.get("/new", (req, res, next) => {
  try {
    return res.render("new", { title: "NEW" });
  } catch (error) {
    next(error);
  }
});

export default eventsRouter;
