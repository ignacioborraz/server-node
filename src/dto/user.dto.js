import crypto from "crypto";

class UserDTO {
  constructor(data) {
    process.env.PERSISTENCE !== "MONGO" && (this._id = crypto.randomBytes(12).toString("hex"));
    this.email = data.email;
    this.password = data.password;
    this.role = data.role || "USER";
    process.env.PERSISTENCE !== "MONGO" && (this.updatedAt = new Date());
    process.env.PERSISTENCE !== "MONGO" && (this.createdAt = new Date());
  }
}

export default UserDTO;
