const Character = require("../models/user");

module.exports = {
  create,
  index,
};

function index(req, res) {
  Character.find({}, function (err, characters) {
    res.render("characters/index", { title: "All Characters", characters });
  });
}

function create(req, res) {
  User.findById(req.params.id, function (err, user) {
    user.characters.push(req.body);
    user.save(function (err) {
      res.redirect(`/characters/${character._id}`);
    });
  });
}
