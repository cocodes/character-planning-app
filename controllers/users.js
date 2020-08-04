const User = require("../models/user");
const { render } = require("ejs");

module.exports = {
  index,
};

function index(req, res) {
  User.find({}, function (err, users) {
    res.render("users/index", { title: "Users", users, user: req.user });
  });
}