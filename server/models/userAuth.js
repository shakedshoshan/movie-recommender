const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAuthSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const UserAuth = mongoose.model("UserAuth", userAuthSchema);
module.exports = UserAuth;
