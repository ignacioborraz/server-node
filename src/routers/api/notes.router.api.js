import {
  create,
  readByUser,
  readOne,
  destroy,
} from "../../controllers/notes.controller.js";
import { Router } from "express";
import passCallback from "../../middlewares/passCallback.js";

const notesRouter = Router();

notesRouter.post("/", passCallback("jwt"), create);
notesRouter.get("/", passCallback("jwt"), readByUser);
notesRouter.get("/:id", readOne);
notesRouter.delete("/:id", destroy);

export default notesRouter;
