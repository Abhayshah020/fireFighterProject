const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: { type: String },
    address: { type: String},
    email: { type: String },
    phone: { type: Number },
    password: { type: String },
    role: { type: String },
    adminId: { type: String,default:""},
  },
  { collection: "Users" }
);
module.exports = mongoose.model("Users", usersSchema);
