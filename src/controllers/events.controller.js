import service from "../services/events.service.js";

class EventsController {
  constructor() {
    this.service = service;
  }
  create = async (req, res, next) => {
    try {
      const data = req.body;
      const response = await this.service.create(data);
      return res.sendSuccess(response);
    } catch (error) {
      return next(error);
    }
  };
  read = async (req, res, next) => {
    try {
      const options = {
        limit: req.query.limit || 20,
        page: req.query.page || 1,
        sort: { title: 1 },
      };
      const filter = {};
      if (req.query.title) {
        filter.title = new RegExp(req.query.title.trim(), "i");
      }
      if (req.query.sort === "desc") {
        options.sort.title = "desc";
      }
      const all = await this.service.read({ filter, options });
      return res.sendSuccess(all);
    } catch (error) {
      return next(error);
    }
  };
  readOne = async (req, res, next) => {
    try {
      const { eid } = req.params;
      const one = await this.service.readOne(eid);
      return res.json({
        statusCode: 200,
        response: one,
      });
    } catch (error) {
      return next(error);
    }
  };
  update = async (req, res, next) => {
    try {
      const { eid } = req.params;
      const data = req.body;
      const response = await this.service.update(eid, data);
      return res.json({
        statusCode: 200,
        response: response,
      });
    } catch (error) {
      return next(error);
    }
  };
  destroy = async (req, res, next) => {
    try {
      const { eid } = req.params;
      const response = await this.service.destroy(eid);
      return res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      return next(error);
    }
  };
}

const controller = new EventsController();
const create = controller.create;
const read = controller.read;
const readOne = controller.readOne;
const update = controller.update;
const destroy = controller.destroy;
export { create, read, readOne, update, destroy };
