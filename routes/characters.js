const express = require("express");
const router = express.Router();
const charactersCtrl = require("../controllers/characters");

router.get("/users/:id/characters", charactersCtrl.index)
router.get("/users/:id/characters/new", isLoggedIn, charactersCtrl.new);
router.get("/users/:id/characters/:id", charactersCtrl.show);
router.post("/characters", isLoggedIn, charactersCtrl.create);
router.post("/users/:id/characters", isLoggedIn, charactersCtrl.addToUser);
router.delete("/characters/:id", isLoggedIn, charactersCtrl.deleteCharacter);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}




// router.get("/users/:id/characters/:id", isLoggedIn, charactersCtrl.edit);
// router.put("/characters/:id", isLoggedIn, charactersCtrl.update);
// router.put("/users/:id/characters", isLoggedIn, charactersCtrl.updateCharacter);


// router.get("characters/:id/edit", charactersCtrl.edit);
// router.put("characters/:id", charactersCtrl.update);
module.exports = router;
