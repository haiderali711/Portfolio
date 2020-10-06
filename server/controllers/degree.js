const Degree = require("../models/Degree");

const createDegree = (req, res) => {
  const degree = new Degree(req.body);

  degree
    .save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
};

module.exports = {
  createDegree
};
