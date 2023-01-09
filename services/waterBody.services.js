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


const listAllWaterBodies = async (req, res) => {
  const data = await waterBody.find({}, { name: 1 });
  return res.send(data);
};

const getWaterBodyByStateName = async (req, res) => {
  const { stateName } = req.body;
  console.log(stateName);
  const data = await waterBody.find({ stateName: { $regex: String(stateName).toUpperCase().split(" ")[0] } });
  const counts = {
    wetlandCount: 0,
    lakeCount: 0,
    pondCount: 0,
    tankCount: 0,
  }
  data.forEach((wb) => {
    switch (wb.type) {
      case "WETLAND":
        counts.wetlandCount += 1;
        break;
      case "LAKE":
        counts.lakeCount += 1;
        break;
      case "POND":
        counts.pondCount += 1;
        break;
      case "TANK":
        counts.tankCount += 1;
        break;
    }
  })
  return res.send({ data: data, counts: counts });
}

const getAllStates = async (req, res) => {
  const data = await waterBody.distinct("stateName");
  return res.send({
    allStates: data,
  })
}

const addWaterBody = async (req, res) => {
  await waterBody.create(req.body, (err, data) => {
    if (err) {
      console.log("There was as error.", err);
      return res.status(500).send({
        error: "Failed to add the water body",
      })
    }
    return res.status(200).send({
      message: "water body added"
    })
  });
}

const deleteWaterBody = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  const resp = await waterBody.findOneAndDelete({ name: name });
  return res.send(resp)
}

const updateWaterBody = async (req, res) => {
  console.log(req.body);
  const resp = await waterBody.findOneAndUpdate({ name: req.body.name }, req.body);
  return res.send(resp);
}

module.exports = {
  listAllWaterBodies,
  feedDataIntoMongo,
  getWaterBodyByStateName,
  getAllStates,
  addWaterBody,
  deleteWaterBody,
  updateWaterBody,
}