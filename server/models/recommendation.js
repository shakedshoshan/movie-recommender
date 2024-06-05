const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recommendationSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true
    },
    recommendations: [{ 
        estimatedRating: Number,
        movieId: Number
    }],
  },
);

const recommendationModel = mongoose.model("recommendation", recommendationSchema);
module.exports = recommendationModel;
