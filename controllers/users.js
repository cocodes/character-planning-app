const User = require("../models/user");

module.exports = {
  index,
  addCharacter,
  delCharacter,
};

function index(req, res) {
  Student.find({}, function (err, students) {
    res.render("students/index", { students });
  });
}

function addCharacter(req, res) {}

function delCharacter(req, res) {}
