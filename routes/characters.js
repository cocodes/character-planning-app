const express = require("express");
const router = express.Router();
const charactersCtrl = require("../controllers/characters");

router.get("/users/:id/characters", charactersCtrl.index)
router.get("/users/:id/characters/:id", charactersCtrl.show);
router.get("/users/:id/characters/new", isLoggedIn, charactersCtrl.new);
router.post("/characters", isLoggedIn, charactersCtrl.create);
router.post("/users/:id/characters", charactersCtrl.addToUser);

router.delete("/characters/:id", isLoggedIn, charactersCtrl.deleteCharacter);

// router.get("characters/:id/edit", charactersCtrl.edit);
// router.put("characters/:id", charactersCtrl.update);


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
