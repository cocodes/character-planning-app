const Character = require("../models/character");

module.exports = {
  create,
};

function create(req, res) {
  Character.findById(req.params.id, function (err, character) {
    character.info.push(req.body);
    character.save(function (err) {
      res.redirect(`/users/`);
    });
  });
}