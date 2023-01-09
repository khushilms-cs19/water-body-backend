const { default: mongoose } = require("mongoose");
const { waterBody } = require("../models/WaterBody")
const listAllWaterBodies = async (req, res) => {
  const data = await waterBody.find({}, { name: 1 });
  return res.send(data);
};

module.exports = listAllWaterBodies;