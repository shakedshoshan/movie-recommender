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
  //   id: {
  //     type: String,
  //     unique: true,
  //     required: true
  //   },
  //   Genre1: {
  //     type: String,
  //     required: true
  //   },
  //   Genre2: {
  //       type: String,
  //       default: ''
  //   },
  //   Genre3: {
  //       type: String,
  //       default: ''
  //   },
  //   Actor1: {
  //       type: String,
  //       default: ''
        
  //   },
  //   Actor2: {
  //     type: String,
  //     default: ''
  //   },
  //   LatestYear: {
  //       type: Number,
  //       default: 0.0
  //   },
  //   RunTime : {
  //       type: Number,
  //       default: 300
  //   },
  //   Origin : {
  //       type: String,
  //       default: ''
  //   },
  //   Studio : {
  //       type: String,
  //       default: ''
  //   },
  // },
  { timestamps: true }
);


const preferences = mongoose.model("preferences", preferencesSchema);
module.exports = preferences;
