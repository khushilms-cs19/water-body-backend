const { default: mongoose } = require("mongoose");
const { waterBody } = require("../models/WaterBody");
const feedDataIntoMongo = async (req, res) => {
  const data = req.body;
  const waterBodyData = {
    stnCode: String(data["STNCode"]),
    name: String(data["Name of Monitoring Location"]),
    type: String(data["Type Water Body"]),
    stateName: String(data["State Name"]),
    minTemperature: String(data["Temperature?C (Min)"]),
    maxTemperature: String(data["Temperature?C (Max)"]),
    minDissolvedOxygen: String(data["Dissolved Oxygen (mg/L) (Min)"]),
    maxDissolvedOxygen: String(data["Dissolved Oxygen (mg/L) (Max)"]),
    minPH: String(data["pH (Min)"]),
    maxPH: String(data["pH (Max)"]),
    minConductivity: String(data["Conductivity (?mhos/cm) (Min)"]),
    maxConductivity: String(data["Conductivity (?mhos/cm) (Max)"]),
    minBOD: String(data["BOD (mg/L) (Min)"]),
    maxBOD: String(data["BOD (mg/L) (Max)"]),
    minNitrate: String(data["Nitrate N + Nitrite N(mg/L) (Min)"]),
    maxNitrate: String(data["Nitrate N + Nitrite N(mg/L) (Max)"]),
    minFecalColiform: String(data["Fecal Coliform (MPN/100ml) (Min)"]),
    maxFecalColiform: String(data["Fecal Coliform (MPN/100ml) (Max)"]),
    minTotalColiform: String(data["Total Coliform (MPN/100ml) (Min)"]),
    maxTotalColiform: String(data["Total Coliform (MPN/100ml) (Max)"]),
  };
  waterBody.create(waterBodyData, (err, data) => {
    if (err) {
      console.log("There was as error.", err);
      return res.status(500).send({
        error: "Failed to add the water body",
      })
    }
    return res.status(200).send({
      message: "water body added"
    })
  })
};

module.exports = feedDataIntoMongo;