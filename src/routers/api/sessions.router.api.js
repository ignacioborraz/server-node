import { Router } from "express";
import passport from "../../middlewares/passport.js";

const authOpts = { session: false, failureRedirect: "/api/sessions/badauth" };
const forbbidenOpts = {
  session: false,
  failureRedirect: "/api/sessions/forbbiden",
};

const sessionsRouter = Router();

sessionsRouter.post(
  "/register",
  passport.authenticate("register", authOpts),
  async (req, res, next) => {
    try {
      return res.json({ statusCode: 201, message: "registered" });
    } catch (error) {
      return next(error);
    }
  }
);
sessionsRouter.post(
  "/login",
  passport.authenticate("login", authOpts),
  async (req, res, next) => {
    try {
      return res.json({ session: req.session, message: "logged in" });
    } catch (error) {
      return next(error);
    }
  }
);
sessionsRouter.post("/signout", async (req, res, next) => {
  try {
    req.session.destroy();
    return res.json({ message: "signed out" });
  } catch (error) {
    return next(error);
  }
});
sessionsRouter.get("/badauth", async (req, res, next) => {
  try {
    return res.json({ statusCode: 401, message: "bad auth" });
  } catch (error) {
    return next(error);
  }
});
sessionsRouter.get("/forbbiden", async (req, res, next) => {
  try {
    return res.json({ statusCode: 403, message: "forbbiden" });
  } catch (error) {
    return next(error);
  }
});

export default sessionsRouter;
