const User = require("../models/User");
const Course = require("../models/Course");
const Degree = require("../models/Degree");

const createUser = (req, res) => {
  var emailU = req.body.email;

  User.findOne({ email: emailU }, (err, foundUser) => {
    if (foundUser === null) {
      var user = null;
      user = new User(req.body);

      user.save(function(err) {
        if (err) {
          return next(err);
        }
        res.status(201).json(user);
      });
    } else {
      res.status(201).json({ emailAready: true });
    }
  }).catch(error => {
    if (error === 401) res.status(404).json();
    else res.status(500).json({ error: error });
  });
};

const deleteUserWithId = (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then(result => {
      if (!result) throw 404;

      res.status(200).json(result);
    })
    .catch(error => {
      if (error === 404) res.status(404).json({ error: `user not found.` });
      else res.status(500).json({ error: error });
    });
};

const updateWithId = (req, res, next) => {
  let newbody = req.body;
  let id = req.params.id;
  User.updateOne({ _id: id }, { $set: newbody }, (error, updatedUser) => {
    if (error) {
      return next(error);
    }
    if (updatedUser === null) {
      res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(updatedUser);
  });
};

const checkAuthentication = (req, res, next) => {
  let userN = req.body.username;
  let passW = req.body.password;

  User.findOne({ username: userN, password: passW }, (error, foundUser) => {
    if (error) {
      return next(error);
    }
    if (user === null) {
      res.status(404).json({ authentication: failed });
    } else {
      res.status(200).json({ foundUser });
    }
  });
};

const findCourseByUserId = (req, res) => {
  const userId = req.params.id;

  Course.find({ user: { $eq: userId } })
    .exec()
    .then(result => {
      if (result.length === 0) throw 404;

      res.status(200).json(result);
    })
    .catch(error => {
      if (error === 404)
        res.status(404).json({
          error: `No courses found for user with id : ${userId}`
        });
      else res.status(500).json({ error: error });
    });
};

const findDegreeByUserId = (req, res) => {
  const userId = req.params.id;

  Degree.find({ user: userId })
  .populate("course")
  .exec()
  .then ( result =>{
    if(result.length === 0) throw 404

    res.status(200).json(result)
  })
  .catch(error => {
    if(error ===404){
      res.stattus(404).json({
        error : `No degrees registered for the user with id :  ${userId}`
      })
    }
  })
};

module.exports = {
  createUser,
  deleteUserWithId,
  updateWithId,
  checkAuthentication,
  findCourseByUserId,
  findDegreeByUserId
};
