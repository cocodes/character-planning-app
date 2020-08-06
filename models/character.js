const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema(
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

const characterSchema = new Schema(
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
    info: [infoSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Character", characterSchema);
