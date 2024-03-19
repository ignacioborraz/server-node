import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { createHash, verifyHash } from "../utils/hash.utils.js";
import { createToken } from "../utils/token.utils.js";
import dao from "../dao/index.dao.js";

const { users } = dao;

passport.use(
  "register",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (req, email, password, done) => {
      try {
        let one = await users.readByEmail(email);
        if (!one) {
          let data = req.body;
          data.password = createHash(password);
          let user = await users.create(data);
          return done(null, user);
        } else {
          return done(null, false, { statusCode: 401 });
        }
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
        const user = await users.readByEmail(email);
        if (user && verifyHash(password, user.password)) {
          const token = createToken({ email, role: user.role });
          req.token = token;
          return done(null, user);
        } else {
          return done(null, false, { statusCode: 401 });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);
passport.use(
  "jwt",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => req?.cookies["token"],
      ]),
      secretOrKey: process.env.SECRET,
    },
    async (jwt_payload, done) => {
      try {
        //console.log(jwt_payload);
        let user = await users.readByEmail(jwt_payload.email);
        if (user) return done(null, user);
        else return done(null, false, { statusCode: 403 });
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;
