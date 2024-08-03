const mongoose = require("mongoose");

const MobileSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    phone: {
      type: String,
    },
    laptop: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mobile", MobileSchema);
