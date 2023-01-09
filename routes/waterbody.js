const { Router } = require("express");
const { waterBody } = require("../models/WaterBody");
const { listAllWaterBodies, feedDataIntoMongo, getWaterBodyByStateName, getAllStates, addWaterBody, deleteWaterBody, updateWaterBody } = require("../services/waterBody.services");

const router = Router();

router.post("/feed", feedDataIntoMongo)
router.get("/all-waterbodies", listAllWaterBodies);
router.get("/all-states", getAllStates);
router.post("/get-by-state", getWaterBodyByStateName);
router.post("/add-water-body", addWaterBody);
router.post("/delete", deleteWaterBody);
router.post("/update", updateWaterBody);
module.exports = {
  waterBodyRouter: router,
}