import notesManager from "../../data/fs/NotesManager.fs.js";
import { Router } from "express";

const notesRouter = Router();

notesRouter.post("/", create);
notesRouter.get("/", read);
notesRouter.get("/:nid", readOne);
notesRouter.put("/:nid", update);
notesRouter.delete("/:nid", destroy);

async function create(req, res) {
  try {
    const data = req.body;
    const one = await notesManager.create(data);
    return res.json({
      statusCode: 201,
      message: "CREATED ID: " + one.id,
    });
  } catch (error) {
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message || "CODER API ERROR",
    });
  }
}

async function read(req, res, next) {
  try {
    const { category } = req.query;
    const all = await notesManager.read(category);
    if (all.length > 0) {
      return res.json({
        statusCode: 200,
        response: all,
      });
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function readOne(req, res, next) {
  try {
    const { nid } = req.params;
    const one = await notesManager.readOne(nid);
    if (one) {
      return res.json({
        statusCode: 200,
        response: one,
      });
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function update(req, res, next) {
  try {
    const { nid } = req.params;
    const data = req.body;
    const one = await notesManager.update(nid, data);
    if (one) {
      return res.json({
        statusCode: 200,
        message: "UPDATED ID: " + one.id,
      });
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function destroy(req, res, next) {
  try {
    const { nid } = req.params;
    const one = await notesManager.destroy(nid);
    if (one) {
      return res.json({
        statusCode: 200,
        message: "DELETED ID: " + one.id,
      });
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

export default notesRouter;
