const express = require("express");
const router = express.Router();
const charactersCtrl = require("../controllers/characters");

router.get("/users/:id/characters", charactersCtrl.index)
router.get("/users/:id/characters/new", isLoggedIn, charactersCtrl.new);
router.post("/characters", isLoggedIn, charactersCtrl.create);
router.post("/users/:id/characters", isLoggedIn, charactersCtrl.addToUser);
router.get("/users/:id/characters/:id", charactersCtrl.show);
router.delete("/characters/:id", isLoggedIn, charactersCtrl.deleteCharacter);
router.put("/characters/:id", isLoggedIn, charactersCtrl.update);
router.put("/characters/:id", isLoggedIn, charactersCtrl.updateCharacter);
// router.get("/users/:id/characters/:id", isLoggedIn, charactersCtrl.edit);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
