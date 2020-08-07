const User = require("../models/user");

const Character = require("../models/character");

module.exports = {
  index,
  show,
};

function index(req, res) {
  User.find({}, function (err, users) {
    Character.find({}, function (err, characters) {
      res.render("users/index", { title: "Users", users, characters, user: req.user });
    });
  });
}

function show(req, res) {
  User.findById(req.params.id, function (err, user) {
    Character.find({ user: user._id }, function (err, characters) {
      res.render("users/show", { title: "User detail", user, characters, user: req.user });
    });
  });
}