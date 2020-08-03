const User = require("../models/user");
const { render } = require("ejs");

module.exports = {
  index,
  addCharacter,
  delCharacter,
};

function index(req, res) {
  User.find({}, function (err, users) {
    res.render("users/index", { users, user: req.user });
  });
}

function addCharacter(req, res) {
  req.user.characters.push(req.body);
  req.user.save(function (err) {
    res.redirect("/");
  });
}

function delCharacter(req, res) { }
