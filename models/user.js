const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    race: {
      type: String,
      enum: [
        "Kaelar",
        "Dünir",
        "Ren'Kai",
        "Empyrean",
        "Vaelune",
        "Niküa",
        "Vek",
        "Py'Rai",
        "Tulnar",
      ],
      required: true,
    },
    archetype: {
      type: String,
      enum: [
        "Bard",
        "Cleric",
        "Fighter",
        "Mage",
        "Ranger",
        "Rogue",
        "Summoner",
        "Tank",
      ],
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    characters: [characterSchema],
    googleId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
