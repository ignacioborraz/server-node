import { users } from "../data/mongo/manager.mongo.js";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import { createHash, isValidPass } from "../utils/hash.utils.js";
import { createToken } from "../utils/token.utils.js";
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

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
        //req.session.email = email;
        //req.session.role = one.role;
        req.token = createToken({ email, role: one.role });
        return done(null, one);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/api/sessions/google/callback",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        //console.log(profile);
        let user = await users.readByEmail(profile.id);
        if (user) {
          user.photo = profile.coverPhoto;
          await user.save();
        } else {
          user = await users.create({
            name: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.id,
            photo: profile.coverPhoto,
            password: createHash(profile.id),
          });
        }
        req.session.email = profile.email;
        req.session.role = user.role;
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;
