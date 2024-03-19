import service from "../services/notes.service.js";

class NotesController {
  constructor() {
    this.service = service;
  }
  create = async (req, res, next) => {
    try {
      const data = req.body;
      data.user_id = req.user._id;
      const one = await this.service.create(data);
      return res.json({
        status: 201,
        response: one,
      });
    } catch (error) {
      return next(error);
    }
  };
  readByUser = async (req, res, next) => {
    try {
      const options = {
        limit: req.query.limit || 4,
        page: req.query.page || 1,
      };
      const filter = {
        user_id: req.user._id,
      };
      req.query.category && (filter.category = req.query.category);
      const all = await this.service.read({ filter, options });
      return res.json({
        status: 200,
        response: all,
      });
    } catch (error) {
      return next(error);
    }
  };
}

const controller = new NotesController();
const { create, readByUser } = controller;
export { create, readByUser };
