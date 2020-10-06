const express = require("express");
const router = express.Router();

const degreeController = require("../controllers/degree");

router.post("/", degreeController.createDegree);

module.exports = router;
