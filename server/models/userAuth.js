const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


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

// userAuthSchema.statics.login = async function (userName, password) {
//   const user = await this.findOne({ userName: userName });
//   if (user) {
//     const auth = await bcrypt.compare(password, user.password);
//     if (auth) {
//       return user;
//     }
//     return Error("incorrect password");
//   }
//   return Error("incorrect email");
// };

// // Hash users token
// userAuthSchema.pre("save", async function (next) {
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

const UserAuth = mongoose.model("UserAuth", userAuthSchema);
module.exports = UserAuth;
