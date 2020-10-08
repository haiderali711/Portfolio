const Skill = require("../models/Skill");

const createSkill = (req, res, next) => {
  Skill.findOne(
    { name: req.body.name, level: req.body.level, user: req.body.user },
    (err, foundSkill) => {
      if (foundSkill === null) {
        const skill = new Skill(req.body);

        skill.save(function (err) {
          if (err) {
            return next(err);
          }
          res.status(201).json(skill);
        });
      } else {
        res.status(201).json({ message: "already exists" });
      }
    }
  ).catch((error) => {
    if (error === 401) res.status(404).json();
    else res.status(500).json({ error: error });
  });
};

const patchSkill = (req, res) => {
  Skill.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .exec()
    .then((result) => {
      if (!result) throw 404;

      res.status(200).json(result);
    })
    .catch((error) => {
      if (error === 404) res.status(404).json({ message: "Not found" });
      else res.status(500).json({ error: error });
    });
};

const deleteSkill = (req, res) => {
  Skill.findByIdAndDelete({ _id: req.params.id })
    .exec()
    .then((result) => {
      if (!result) throw 404;

      res.status(202).json(result);
    })
    .catch((error) => {
      if (error === 404) {
        res
          .status(404)
          .json({ message: `No Skill with id : ${req.params.id} is found` });
      } else {
        res.status(500).json({ error: error });
      }
    });
};

module.exports = {
  createSkill,
  deleteSkill,
  patchSkill,
};
