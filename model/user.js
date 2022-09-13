import mongoose from "mongoose";

const UsersSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  userid: { type: String },
  accountId: { type: String, required: true },
});

module.exports = mongoose.model("Users", UsersSchema);
