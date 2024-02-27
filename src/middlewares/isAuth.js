import { verifyToken } from "../utils/token.utils.js";

const isAuth = (req, res, next) => {
  try {
    const data = verifyToken(req.cookies);
    if (data) return next();
    const error = new Error("Forbidden");
    error.statusCode = 403;
    throw error;
  } catch (error) {
    return next(error);
  }
};

export default isAuth;
