const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const preferencesSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true
    },
    preferences: {
      type: Object, 
      default: {} 
    },
  },
  { timestamps: true }
);


const preferences = mongoose.model("preferences", preferencesSchema);
module.exports = preferences;
