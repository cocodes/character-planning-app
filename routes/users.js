var express = require("express");
var router = express.Router();
const usersCtrl = require("../controllers/users");

router.get("/users", usersCtrl.index);

router.post("/characters", isLoggedIn, usersCtrl.addCharacter);

router.delete("/characters/:id", isLoggedIn, usersCtrl.delCharacter);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
