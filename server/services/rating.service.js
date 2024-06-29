const ratingModel = require("../models/rating");
const jwt = require("jsonwebtoken");

exports.setRating = async (rating) => {
  try {
    const movieIdToPush = rating.movieId.id;
    const ratingToPust = rating.rating;
    const user = await ratingModel.findOne({ id: rating.userId });
    if (user) {
      // Check if the movieId already exists in the rating array
      const existingRatingIndex = user.rating.findIndex(
        (r) => r.movieId === rating.movieId.id
      );
      // If the movieId exists, update the rating
      if (existingRatingIndex !== -1) {
        user.rating[existingRatingIndex].rating = rating.rating;
      } else {
        // If the movieId doesn't exist, add it to the rating array
        user.rating.push({ movieId: movieIdToPush, rating: ratingToPust });
      }
      // Save the updated user document
      await user.save();
    } else {
      // If the user doesn't exist, create a new document
      const newRating = new ratingModel({
        id: rating.userId,
        rating: [{ movieId: movieIdToPush, rating: ratingToPust }],
      });
      await newRating.save();
    }
  } catch (err) {
    console.error("Error updating/creating rating:", err);
  }
};

exports.getRating = async (ratingInfo) => {
  try {
    const user = await ratingModel.findOne({ id: ratingInfo.userId });
    if (user) {
      // Check if the movieId already exists in the rating array
      const existingRatingIndex = user.rating.findIndex(
        (r) => r.movieId === ratingInfo.movieId.id
      );
      // If the movieId exists, update the rating
      if (existingRatingIndex !== -1) {
        return user.rating[existingRatingIndex].rating;
      } else {
        // If the movieId doesn't exist
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error updating/creating rating:", err);
  }
};

exports.getAllRating = async (ratingInfo) => {
  try {
    const user = await ratingModel.findOne({ id: ratingInfo.userId });
    if (user) {
      return user.rating;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error updating/creating rating:", err);
  }
};
