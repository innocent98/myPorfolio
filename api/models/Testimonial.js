const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    company: {
      type: String,
    },
    testimony: {
      type: String,
    },
    ig: {
      type: String,
    },
    tw: {
      type: String,
    },
    picture: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", TestimonialSchema);
