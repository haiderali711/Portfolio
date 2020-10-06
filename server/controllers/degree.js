const Degree = require("../models/Degree");

const createDegree = (req, res) => {
  const degree = new Degree(req.body);

  degree
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

const addCourseID = (req, res) => {
  var degreeId = req.body.id;
  var courseId = req.body.courseID;
  Degree.findOneAndUpdate(
    { _id: degreeId },
    { $push: { course: courseId } },
    { new: true },
    (err, foundDegree) => {
      res.status(200).json(foundDegree);
    }
  ).catch((error) => {
    if (error === 404) res.status(404).json();
    else res.status(500).json({ error: error });
  });
};

const deleteDegree = (req, res) => {
  Course.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then((result) => {
      if (!result) throw 404;

      res.status(200).json(result);
    })
    .catch((error) => {
      if (error === 404) res.status(404).json({ error: `degree not found.` });
      else res.status(500).json({ error: error });
    });
};

module.exports = {
  createDegree,
  addCourseID,
  deleteDegree,
};
