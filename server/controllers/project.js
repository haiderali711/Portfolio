const Project = require("../models/Project");

const createProject = (req, res) => {
  const project = new Project(req.body);

  Project.findOne(
    { name: project.name, user: project.user },
    (err, foundProject) => {
      if (err) throw 404;
      if (foundProject === null) {
        project
          .save()
          .then((result) => {
            if (!result) throw 404;

            // res.status(200).json(result);
          })
          .catch((error) => {
            res.status(500).json({ message: error });
          });
        res.status(201).json(project);
      } else {
        res.status(200).json({
          message: "Project with this name for this user already exists",
        });
      }
    }
  ).catch((error) => {
    if (error === 404)
      res.status(404).json({ message: "Project already exists" });
    else res.status(500).json({ error: error });
  });
};

const patchProject = (req, res) => {
  const newbody = req.body;

  Project.findByIdAndUpdate({ _id: req.params.id }, newbody, { new: true })
    .exec()
    .then((result) => {
      if (!result) throw 404;

      res.status(200).json(result);
    })
    .catch((error) => {
      if (error === 404) res.status(404).json({ message: "course not found" });
      else res.status(500).json({ message: error });
    });
};

const deleteProject = (req, res, next) => {
  Project.findByIdAndDelete({ _id: req.params.id }, (err, foundProject) => {
    if (err) {
      return next(err);
    }
    if (foundProject === null) {
      return res.status(404).json({ message: "project not found" });
    }
    res.status(202).json(foundProject);
  });
};


module.exports = {
  createProject,
  deleteProject,
  patchProject,
};