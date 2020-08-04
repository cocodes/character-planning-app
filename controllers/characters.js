const Character = require("../models/user");

module.exports = {
  index,
  new: newCharacter,
  addCharacter,
  deleteCharacter,
  edit,
  update,
};

function index(req, res) {
  res.render("characters/index", {
    title: "Characters",
    user: req.user,
  });
}

function addCharacter(req, res) {
  req.user.characters.push(req.body);
  req.user.save(function (err) {
    res.redirect("/characters");
  });
}

function newCharacter(req, res) {
  res.render("characters/new", {
    title: "Add Character",
    user: req.user,
  });
}

function deleteCharacter(req, res) {
  req.user.characters.pop(req.body);
  req.user.save(function (err) {
    res.redirect("/characters")
  })
}

function edit(req, res) {

}

function update(req, res) {

}