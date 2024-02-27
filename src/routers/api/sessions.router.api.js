import { Router } from "express";
import passport from "../../middlewares/passport.js";
import isAuth from "../../middlewares/isAuth.js";
import passCallback from "../../middlewares/passCallback.js";

const sessionsRouter = Router();

//register
sessionsRouter.post(
  "/register",
  passCallback("register"),
  async (req, res, next) => {
    try {
      return res.json({
        statusCode: 201,
        message: "Registered!",
      });
    } catch (error) {
      return next(error);
    }
  }
);

//login
sessionsRouter.post(
  "/login",
  passport.authenticate("login", {
    session: false,
    failureRedirect: "/api/sessions/badauth",
  }),
  async (req, res, next) => {
    try {
      return res
        .cookie("token", req.token, {
          maxAge: 60 * 60 * 24 * 7,
          httpOnly: true,
        })
        .json({
          statusCode: 200,
          message: "Logged in!",
        });
    } catch (error) {
      return next(error);
    }
  }
);

//google
sessionsRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

//google-callback
sessionsRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/api/sessions/badauth",
  }),
  async (req, res, next) => {
    try {
      return res.json({
        statusCode: 200,
        message: "Logged in with google!",
        session: req.session,
      });
    } catch (error) {
      return next(error);
    }
  }
);

//google
sessionsRouter.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

//github-callback
sessionsRouter.get(
  "/github/callback",
  passport.authenticate("github", {
    session: false,
    failureRedirect: "/api/sessions/badauth",
  }),
  async (req, res, next) => {
    try {
      return res.json({
        statusCode: 200,
        message: "Logged in with github!",
        session: req.session,
      });
    } catch (error) {
      return next(error);
    }
  }
);

//me
sessionsRouter.post("/", passCallback("jwt"), async (req, res, next) => {
  try {
    const user = {
      email: req.user.email,
      role: req.user.role,
      photo: req.user.photo,
    }
    //return res.sendSuccess(user)
    return res.json({statusCode: 200,response: user})
  } catch (error) {
    return next(error);
  }
});

//signout
sessionsRouter.post("/signout", passCallback("jwt"), async (req, res, next) => {
  try {
    console.log("token");
    return res.clearCookie("token").json({
      statusCode: 200,
      message: "Signed out!",
    });
  } catch (error) {
    return next(error);
  }
});

//badauth
sessionsRouter.get("/badauth", (req, res, next) => {
  try {
    return res.send401();
  } catch (error) {
    return next(error);
  }
});
sessionsRouter.get("/forbidden", (req, res, next) => {
  try {
    return res.send403();
  } catch (error) {
    return next(error);
  }
});

export default sessionsRouter;
