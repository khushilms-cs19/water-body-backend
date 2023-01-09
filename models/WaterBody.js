const mongoose = require("mongoose")
const WaterBodySchema = new mongoose.Schema({
  stnCode: {
    type: String,

  },
  name: {
    type: String,

  },
  type: {
    type: String,

  },
  stateName: {
    type: String,

  },
  minTemperature: {
    type: String,

  },
  maxTemperature: {
    type: String,

  },
  minDissolvedOxygen: {
    type: String,

  },
  maxDissolvedOxygen: {
    type: String,

  },
  minPH: {
    type: String,

  },
  maxPH: {
    type: String,

  },
  minConductivity: {
    type: String,

  },
  maxConductivity: {
    type: String,

  },
  minBOD: {
    type: String,

  },
  maxBOD: {
    type: String,

  },
  minNitrate: {
    type: String,

  },
  maxNitrate: {
    type: String,

  },
  minFecalColiform: {
    type: String,

  },
  maxFecalColiform: {
    type: String,

  },
  minTotalColiform: {
    type: String,

  },
  maxTotalColiform: {
    type: String,

  },
});
module.exports = {
  waterBody: mongoose.model("waterBody", WaterBodySchema)
}