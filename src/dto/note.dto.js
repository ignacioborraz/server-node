import crypto from "crypto";

class NoteDTO {
  constructor(data) {
    process.env.PERSISTENCE !== "MONGO" && (this._id = crypto.randomBytes(12).toString("hex"));
    this.text = data.text;
    this.user_id = data.user_id;
    this.category = data.category || "to do";
    process.env.PERSISTENCE !== "MONGO" && (this.updatedAt = new Date());
    process.env.PERSISTENCE !== "MONGO" && (this.createdAt = new Date());
  }
}

export default NoteDTO;
