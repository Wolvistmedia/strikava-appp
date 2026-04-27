const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, "Mobile must be 10 digits"],
    },
    course: {
      type: String,
      enum: ["cloud", "aws", "cyber", "devops"],
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["contact", "consultation"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", inquirySchema);