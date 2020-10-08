const express = require("express");
const router = express.Router();

const skillController = require("../controllers/skill");

router.post("/", skillController.createSkill);
router.delete("/:id", skillController.deleteSkill);
router.patch("/:id", skillController.patchSkill);

module.exports = router;
