const express = require("express");
const router = express.Router();

const degreeController = require("../controllers/degree");

router.post("/", degreeController.createDegree);
router.patch("/:id/courses/:courseID", degreeController.addCourseID);
router.delete("/:id", degreeController.deleteDegree);

module.exports = router;
