const Character = require("../models/character");

module.exports = {
  create,
  update,
};

function create(req, res) {
  Character.findById(req.params.id, function (err, character) {
    character.info.push(req.body);
    const user = req.user.id;
    character.save(function (err) {
      res.redirect(`/users/${user}/characters/${character._id}`);
    });
  });
}


// function update(req, res) {
//   Character.findByIdAndUpdate(req.params.id, function (err, character) {
//     character.save(function (err) {
//       res.redirect(`/users/`);
//     });
//   });
// }

// function update(req, res) {
//   Character.findByIdAndUpdate(req.params.id, {
//     secondaryArchetype: req.body.secondaryArchetype,
//   }, function (err, review) {
//     res.redirect(`/users/`);
//   })
// };

function update(req, res) {
  Character.findOne({ "info._id": req.params.id }, function (err, character) {
    const user = req.user.id;
    const info = character.info.id(req.params.id);
    info.overwrite(req.body);
    character.save(function (err) {
      res.redirect(`/users/${user}/characters/${character._id}`);
    });
  });
}
