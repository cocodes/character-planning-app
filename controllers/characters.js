const Characters = require("../models/user");

module.exports = {
  index,
  new: newCharacter,
  addCharacter,
  deleteCharacter,
  edit,
  update,
  show,
};

function index(req, res) {
  console.log(req.user)
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
  console.log(req.user)
  res.render("characters/new", {
    title: "Add Character",
    user: req.user,
  });
}

function deleteCharacter(req, res) {
  req.user.characters.splice(req.params.id, 1);
  req.user.save(function (err) {
    res.redirect("/characters")
  })
}

function show(req, res) {
  res.render("characters/show", {
    title: "Character",
    user: req.user,
    characters: req.user.characters,
  });
}

function edit(req, res) {
  res.render("characters/edit", {
    user: req.user,
    character: user.characters,
  });
}

function update(req, res) {

}

// function update(id, todo) {
//   todos.splice(id, 1, todo);
// }


// function create(todo) {
//   todos.push(todo);
// }

// function getAll() {
//   return todos;
// }

// function getOne(id) {
//   return todos[id];
// }
