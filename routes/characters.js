const express = require("express");
const router = express.Router();
const charactersCtrl = require("../controllers/characters");

router.get("/characters", charactersCtrl.index)
router.post("/", isLoggedIn, charactersCtrl.create);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}


module.exports = router;
