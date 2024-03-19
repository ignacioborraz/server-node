import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "users";
const schema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: { type: String, default: "USER", enum: ["USER", "ADMIN", "PREMIUM"] },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const User = model(collection, schema);
export default User;
