import CustomRouter from "../CustomRouter.js";
import {
  create,
  read,
  readOne,
  update,
  destroy,
} from "../../controllers/events.controller.js";

export default class EventsRouter extends CustomRouter {
  init() {
    this.create("/", ["ADMIN"], create);
    this.read("/", ["PUBLIC"], read);
    this.read("/:eid", ["PUBLIC"], readOne);
    this.update("/:eid", ["ADMIN", "PREM"], update);
    this.destroy("/:eid", ["ADMIN", "PREM"], destroy);
  }
}
