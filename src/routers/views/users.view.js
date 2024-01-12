import { Router } from "express";

import users from "../../data/fs/users.fs.js";

const usersRouter = Router();

usersRouter.get("/chat", (req, res, next) => {
  try {
    return res.render("chat", {});
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/:uid", (req, res, next) => {
  try {
    const { uid } = req.params;
    const one = users.readOne(uid);
    if (!one) {
      return res.render("notFound", { not: "user", title: "NOT FOUND" });
    }
    return res.render("profile", { profile: one, title: "PROFILE" });
  } catch (error) {
    next(error);
  }
});

export default usersRouter;
