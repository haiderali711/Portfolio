const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");

router.post("/", UserController.createUser);

router.post("/login", UserController.checkAuthentication);

router.get("/:id/courses", UserController.findCourseByUserId);

router.get("/:id/degrees", UserController.findDegreeByUserId);

router.get('/:id/projects', UserController.findProjectsByUserId);

router.patch("/:id", UserController.updateWithId);

router.delete("/:id", UserController.deleteUserWithId);

// router.put('/:id', UserController.putUserWithId);

module.exports = router;
