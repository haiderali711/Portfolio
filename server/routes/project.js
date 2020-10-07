const express = require("express");
const router = express.Router();

const projectController = require("../controllers/project");

router.post("/", projectController.createProject);

router.delete("/:id", projectController.deleteProject);

router.patch("/:id", projectController.patchProject);

module.exports = router;
