import { fork } from "child_process";
import usersRouter from "./users.router.api.js";
import EventsRouter from "./events.router.api.js";
import ordersRouter from "./orders.router.api.js";
import sessionsRouter from "./sessions.router.api.js";
import CustomRouter from "../CustomRouter.js";

const events = new EventsRouter();
export default class ApiRouter extends CustomRouter {
  init() {
    this.use("/users", usersRouter);
    this.use("/events", events.getRouter());
    this.use("/orders", ordersRouter);
    this.use("/sessions", sessionsRouter);
    this.read("/sum", ["PUBLIC"], async (rq, res, next) => {
      try {
        let result = 0;
        for (let i = 0; i < 5e9; i++) {
          result += 1;
        }
        return res.sendSuccess(result);
      } catch (error) {
        return next(error);
      }
    });
    this.read("/sum-fork", ["PUBLIC"], async (rq, res, next) => {
      try {
        const child = fork("./src/utils/sum.utils.js");
        child.send("start");
        child.on("message", (response) => res.sendSuccess(response));
      } catch (error) {
        return next(error);
      }
    });
  }
}
