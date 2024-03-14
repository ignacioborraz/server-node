import dao from "../dao/index.dao.js";

class EventsService {
  constructor() {
    this.model = dao.event;
  }
  create = async (data) => {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      return next(error);
    }
  };
  read = async ({ filter, options }) => {
    try {
      const all = await this.model.read({ filter, options });
      return all;
    } catch (error) {
      return next(error);
    }
  };
  readOne = async (id) => {
    try {
      const response = await this.model.readOne(id);
      return response;
    } catch (error) {
      return next(error);
    }
  };
  update = async (id, data) => {
    try {
      const response = await this.model.update(id, data);
      return response;
    } catch (error) {
      return next(error);
    }
  };
  destroy = async (id) => {
    try {
      const response = await this.model.destroy(id);
      return response;
    } catch (error) {
      return next(error);
    }
  };
}

const service = new EventsService();
export default service;
