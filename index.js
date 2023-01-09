//imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/connection");
const bodyParser = require("body-parser");
const { waterBodyRouter } = require("./routes/waterbody");

//port setup 
const PORT = process.env.PORT || 3000;

//initialize app
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: "*",
}));
app.use(bodyParser.urlencoded({
  extended: true,
}))

//pinging the server
app.get("/ping", (req, res) => {
  res.send({ status: "pong", message: "all good here" });
});

//adding the routers
app.use(waterBodyRouter);
//starting the server 
app.listen(PORT, () => {
  console.log(`the server is up at the port: ${PORT}`);
})

