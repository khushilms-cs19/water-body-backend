const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://root:root@cluster0.92gtju3.mongodb.net/waterBodies?retryWrites=true&w=majority").then(() => {
  console.log("connection to db was successful");
}).catch((err) => {
  console.log("There was an error in the connection", err);
})