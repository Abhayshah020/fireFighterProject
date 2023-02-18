const mongoose = require("mongoose");

const rescueListSchema = new mongoose.Schema(
  {
    name: { type: String },
    address: { type: String},
    phone: { type: String },
    date: { type: String },
    senderId: { type: String },
    rescueStatus: { type: String , default:'pending' },
  },
  { collection: "RescueList" }
);
module.exports = mongoose.model("RescuList", rescueListSchema);