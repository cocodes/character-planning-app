const mongoose = require("mongoose");

/*
The factSchema is used to embedded docs in as student doc.
There is no model and no 'facts' collection
*/
const characterSchema = new mongoose.Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    avatar: String,
    characters: [characterSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
