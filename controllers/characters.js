const Character = require("../models/user");
const User = require("../models/user");

module.exports = {
  create,
  index,
};

// function index(req, res) {
//   User.find({}, function (err, characters) {
//     res.render("characters/index", { characters, user: req.user });
//     console.log(res.locals.currentUser);
//   });
// }

// function index(req, res) {
//   Character.find({}, function (err, characters) {
//     res.render("characters/index", { title: "All Characters", characters });
//   });
// }

function index(req, res) {
  User.find(req.params.id, function (err, user) {
    res.render("characters/index", {
      title: "Add Character",
      user,
    });
    console.log(user);
    console.log(res.locals.currentUser);
  });
}

function create(req, res) {
  User.findById(req.params.id, function (err, user) {
    user.characters.push(req.body);
    user.save(function (err) {
      res.redirect(`/users/${user._id}/characters`);
    });
  });
}
