import { users } from "../data/mongo/manager.mongo.js";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { createHash, isValidPass } from "../utils/hash.utils.js";

passport.use(
  "register",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (req, email, password, done) => {
      try {
        const data = req.body;
        const one = await users.readByEmail(email);
        if (one) return done(null, false);
        data.password = createHash(password);
        const user = await users.create(data);
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (req, email, password, done) => {
      try {
        const one = await users.readByEmail(email);
        if (!one) return done(null, false);
        if (!isValidPass(password, one.password)) return done(null, false);
        req.session.email = email;
        req.session.role = one.role;
        return done(null, one);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;
