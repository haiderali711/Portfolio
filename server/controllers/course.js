const Course = require("../models/Course");

const createCourse = (req, res) => {
  const course = new Course(req.body);

  course
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

const updateCourse = (req, res) => {
  Course.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .exec()
    .then((result) => {
      if (!result) throw 404;

      res.status(200).json({ message: "Course Update" });
    })
    .catch((error) => {
      if (error === 404) res.status(404).json({ message: "course not found" });
      else res.status(500).json({ message: error });
    });
};

const deleteCourse = (req, res) => {
  Course.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then((result) => {
      if (!result) throw 404;

      res.status(200).json(result);
    })
    .catch((error) => {
      if (error === 404) res.status(404).json({ error: `user not found.` });
      else res.status(500).json({ error: error });
    });
};

module.exports = {
  createCourse,
  updateCourse,
  deleteCourse
};
