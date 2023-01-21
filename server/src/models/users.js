const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: { type: String },
    address: { type: String},
    email: { type: String },
    phone: { type: Number },
    password: { type: String },
  },
  { collection: "Users" }
);
module.exports = mongoose.model("Users", usersSchema);