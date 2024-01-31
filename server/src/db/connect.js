const mongoose = require("mongoose");
require("dotenv").config();
const MongoUrl = process.env.MONGO_URL;
console.log("🚀 ~ MongoUrl:", MongoUrl)
module.exports = connect = async () => {
  try {
    mongoose.set("strictQuery",true);
    await mongoose.connect(MongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb");
  } catch (error) {
    console.error(error);
  }
};
