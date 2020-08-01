const User = require("../models/user");

module.exports = {
  index,
  addCharacter,
  delCharacter,
};

function index(req, res) {
  User.find({}, function (err, users) {
    res.render("users/index", { users });
  });
}

function addCharacter(req, res) {}

function delCharacter(req, res) {}
