import { Types } from "mongoose";
import Event from "./models/event.model.js";
import User from "./models/user.model.js";
import Order from "./models/order.model.js";
import notFoundOne from "../../utils/notFoundOne.utils.js";

class MongoManager {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const one = await this.model.create(data);
      return one._id;
    } catch (error) {
      throw error;
    }
  }
  async read({ filter, sortAndPaginate }) {
    try {
      //const all = await this.model.find(filter)
      const all = await this.model.paginate(filter, sortAndPaginate);
      if (all.length === 0) {
        const error = new Error("There aren't documents");
        error.statusCode = 404;
        throw error;
      }
      return all;
    } catch (error) {
      throw error;
    }
  }
  async report(uid) {
    try {
      const report = await this.model.aggregate([
        { $match: { user_id: new Types.ObjectId(uid) } },
        {
          $lookup: {
            foreignField: "_id",
            from: "events",
            localField: "event_id",
            as: "event_id",
          },
        },
        {
          $replaceRoot: {
            newRoot: {
              $mergeObjects: [{ $arrayElemAt: ["$event_id", 0] }, "$$ROOT"],
            },
          },
        },
        { $set: { subTotal: { $multiply: ["$quantity", "$price"] } } },
        { $group: { _id: "$user_id", total: { $sum: "$subTotal" } } },
        { $project: { _id: 0, user_id: "$_id", total: "$total", date: new Date() } },
        //{ $merge: { into: "bills" } },
      ]);
      return report;
    } catch (error) {
      throw error;
    }
  }
  async readOne(id) {
    try {
      const one = await this.model.findById(id);
      notFoundOne(one);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      const opt = { new: true };
      const one = await this.model.findByIdAndUpdate(id, data, opt);
      notFoundOne(one);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async destroy(id) {
    try {
      const one = await this.model.findByIdAndDelete(id);
      notFoundOne(one);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async stats(obj) {
    try {
      let { filter } = obj;
      let stats = await this.model.find(filter).explain("executionStats");
      console.log(stats);
      console.log(stats.executionStats);
      stats = {
        quantity: stats.executionStats.nReturned,
        time: stats.executionStats.executionTimeMillis,
      };
      return stats;
    } catch (error) {
      throw error;
    }
  }
}

const events = new MongoManager(Event);
const users = new MongoManager(User);
const orders = new MongoManager(Order);

export { events, users, orders };
