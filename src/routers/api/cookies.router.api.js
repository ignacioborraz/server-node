import { Router } from "express";

const cookiesRouter = Router();

cookiesRouter.get("/set", async (req, res, next) => {
  try {
    const maxAge = 100000;
    return res
      .cookie("modo", "oscuro", { maxAge })
      .json({ maxAge: maxAge / 1000 + " segundos" });
  } catch (error) {
    return next(error);
  }
});
cookiesRouter.get("/signed", async (req, res, next) => {
  try {
    const maxAge = 60000;
    const signed = true;
    return res
      .cookie("modo", "oscuro", { maxAge, signed })
      .json({ maxAge: maxAge / 1000 + " segundos" });
  } catch (error) {
    return next(error);
  }
});
cookiesRouter.get("/get", async (req, res, next) => {
  try {
    const cookieGuardada = { modo: req.cookies.modo };
    return res.json(cookieGuardada);
  } catch (error) {
    return next(error);
  }
});
cookiesRouter.get("/get-signed", async (req, res, next) => {
  try {
    const cookieGuardada = { modo: req.signedCookies.modo };
    return res.json(cookieGuardada);
  } catch (error) {
    return next(error);
  }
});
cookiesRouter.get("/clear", async (req, res, next) => {
  try {
    return res.clearCookie("modo").json({ response: "cookie borrada" });
  } catch (error) {
    return next(error);
  }
});

export default cookiesRouter;
