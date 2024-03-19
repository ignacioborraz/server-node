import { model, Schema, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "notes";
const schema = new Schema(
  {
    text: { type: String, required: true },
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    category: { type: String, default: "to do", enum: ["to do", "done"] },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);
schema.pre("find", function () { this.populate("user_id", "email") });

const Note = model(collection, schema);
export default Note;
