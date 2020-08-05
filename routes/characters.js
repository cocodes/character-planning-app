const express = require("express");
const router = express.Router();
const charactersCtrl = require("../controllers/characters");

router.get("/characters", charactersCtrl.index)
router.get("/characters/new", isLoggedIn, charactersCtrl.new);
router.get("/characters/:id", isLoggedIn, charactersCtrl.show);
router.post("/characters", isLoggedIn, charactersCtrl.addCharacter);
router.delete("/characters/:id", isLoggedIn, charactersCtrl.deleteCharacter);

router.get("characters/:id/edit", charactersCtrl.edit);
router.put("characters/:id", charactersCtrl.update);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
