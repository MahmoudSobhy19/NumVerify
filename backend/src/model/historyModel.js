const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema(
  {
    valid: {
      type: Boolean,
    },
    number: {
      type: String,
    },
    local_format: {
      type: String,
    },
    international_format: {
      type: String,
    },
    country_prefix: {
      type: String,
    },
    country_code: {
      type: String,
    },
    country_name: {
      type: String,
    },
    location: {
      type: String,
    },
    carrier: {
      type: String,
    },
    line_type: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("History", historySchema);
