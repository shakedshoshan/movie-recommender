const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishListSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true
    },
    movies: [{ 
        movieId: Number
    }],
  },
);

const wishList = mongoose.model("wishList", wishListSchema);
module.exports = wishList;