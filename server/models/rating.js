const mongoose = require("mongoose");
const { string, number } = require("zod");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  rating: [
    {
      movieId: Number,
      rating: Number,
    },
  ],
});

const Rating = mongoose.model("Rating", ratingSchema);
module.exports = Rating;
