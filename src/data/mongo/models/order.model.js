import { model, Schema, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const collection = "orders";
const schema = new Schema(
  {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    event_id: { type: Types.ObjectId, required: true, ref: "events" },
    quantity: { type: Number, default: 1 },
    state: {
      type: String,
      default: "reserved",
      enum: ["reserved", "payed", "delivered"],
    },
  },
  { timestamps: true }
);

schema.pre('find',function() {this.populate('user_id',"name")})
schema.pre('find',function() {this.populate('event_id',"name place")})
schema.plugin(mongoosePaginate)

const Order = model(collection, schema);
export default Order;
