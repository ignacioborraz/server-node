import { Router } from "express";
import { users } from "../dao/mongo/manager.mongo.js";
import jwt from "jsonwebtoken";

class CustomRouter {
  constructor() {
    this.router = Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  init() {}

  applyCb(cbs) {
    return cbs.map((cb) => async (...params) => {
      try {
        await cb.apply(this, params);
      } catch (error) {
        params[1].status(500).send(error);
      }
    });
  }

  responses = (req, res, next) => {
    res.sendSuccess = (payload) =>
      res.status(200).json({ statusCode: 200, response: payload });
    res.send400 = (error) =>
      res.status(400).json({ statusCode: 400, message: error });
    res.send401 = () =>
      res.status(401).json({ statusCode: 401, message: "Bad Auth!" });
    res.send403 = () =>
      res.status(403).json({ statusCode: 403, message: "Forbidden!" });
    res.send404 = () =>
      res.status(404).json({ statusCode: 404, message: "Not found!" });
    return next();
  };

  policies = (policies) => async (req, res, next) => {
    if (policies.includes("PUBLIC")) {
      return next();
    } else {
      let token = req.cookies["token"];
      if (!token) {
        return res.send401();
      } else {// Corregir asignación del token
        try {
          const { role, email } = jwt.verify(token, process.env.SECRET);
          if (
            (policies.includes("USER") && role === 0) ||
            (policies.includes("ADMIN") && role === 1) ||
            (policies.includes("PREM") && role === 2)
          ) {
            const user = await users.readByEmail(email);
            req.user = user;
            return next();
          } else {
            return res.send403();
          }
        } catch (error) {
          console.log(error);
          return res.send401();
        }
      }
    }
  };

  create(path, policies, ...cbs) {
    this.router.post(path, this.responses, this.policies(policies), this.applyCb(cbs));
  }

  read(path, policies, ...cbs) {
    this.router.get(path, this.responses, this.policies(policies), this.applyCb(cbs));
  }

  update(path, policies, ...cbs) {
    this.router.put(path, this.responses, this.policies(policies), this.applyCb(cbs));
  }

  destroy(path, policies, ...cbs) {
    this.router.delete(path, this.responses, this.policies(policies), this.applyCb(cbs));
  }

  use(path, ...cbs) {
    this.router.use(path, this.responses, this.applyCb(cbs));
  }
}

export default CustomRouter;
