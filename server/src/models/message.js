const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    senderId: { type: String },
    recevierId: { type: String},
    message: { type: String, default:''},
  },
  { collection: "Message" }
);
module.exports = mongoose.model("Message", messageSchema);