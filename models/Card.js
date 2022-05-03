const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    
    cardTitle: {
      type: String,
      required: true,
      unique: true,
    },
    cardDesc: {
      type: String,
      required: true,
    },
    cardCat: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", CardSchema);
