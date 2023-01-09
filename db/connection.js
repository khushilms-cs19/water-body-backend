const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_LINK).then(() => {
  console.log("connection to db was successful");
}).catch((err) => {
  console.log("There was an error in the connection", err);
})