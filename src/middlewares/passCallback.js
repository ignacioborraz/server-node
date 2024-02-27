import passport from "passport";

export default (strategy) => {
  return async (req, res, next) => {
    passport.authenticate(strategy, (err, user, info) => {
      console.log({ err, user, info });
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.json({
          statusCode: info,
          message: "bad auth",
        });
      }
      req.user = user;
      return next();
    })(req, res, next);
  };
};
