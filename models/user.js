const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema(
  {
    secondaryArchetype: {
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
    },
    guild: String,
    familyName: String,
  },
  { timestamps: true }
);

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
      required: true,
    },
    info: [infoSchema]
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
