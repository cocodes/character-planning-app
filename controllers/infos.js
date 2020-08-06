const Character = require("../models/character");

module.exports = {
  create,
};

function create(req, res) {
  Character.findById(req.params.id, function (err, character) {
    character.info.push(req.body);
    character.save(function (err) {
      res.redirect(`/users/${user._id}/characters/${character._id}`);
    });
  });
}



// const User = require("../models/user");

// module.exports = {
// };

// function create(req, res) {
//   User.find(req.params.id, function (err, user) {
//     flight.destinations.push(req.body);
//     flight.save(function (err) {
//       res.redirect(`/chracters`);
//     });
//   });
// }

// function addInfo(req, res) {
//   req.user.characters.infos.push(req.body);
//   req.user.save(function (err) {
//     res.redirect("/characters");
//   });
// }