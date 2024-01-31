const mongoose = require("mongoose");

const practiceSchema = new mongoose.Schema(
  {
    text: { type: String },
  },
  { collection: "Practice" }
);
module.exports = mongoose.model("Practice", practiceSchema);