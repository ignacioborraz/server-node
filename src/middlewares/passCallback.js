import CustomError from "../utils/errors/CustomError.js";
import errors from "../utils/errors/errors.js";
import passport from "./passport.js";

export default (strategy) => async (req, res, next) => {
  try {
    passport.authenticate(strategy, (err, user, info) => {
      if (err) return next(err);
      if (user) {
        req.user = user;
        return next();
      }
      CustomError.new({
        message: info.message || errors.auth.message,
        statusCode: info.statusCode || errors.auth.statusCode,
      });
    })(req, res, next);
  } catch (error) {
    return next(error);
  }
};
