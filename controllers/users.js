const User = require("../models/user");

const Character = require("../models/character");

module.exports = {
  index,
  show,
};

function index(req, res) {
  User.find({}, function (err, users) {
    res.render("users/index", { title: "Users", users, user: req.user });
  });
}

function show(req, res) {
  User.findById(req.params.id, function (err, user) {
    Character.find({ user: user._id }, function (err, characters) {
      res.render("users/show", { title: "Fight detail", user, characters, user: req.user });
    });
  });
}

// const User = require("../models/user");
// const { render } = require("ejs");

// module.exports = {
//   index,
// };

// function index(req, res) {
//   User.find({}, function (err, users) {
//     res.render("users/index", { title: "Users", users, user: req.user });
//   });
// }