const recommendationModel = require("../models/recommendation");
const axios = require("axios");
const { flaskApiBaseUrl } = require("./../config");

exports.generateRecommendation = async (data) => {
  try {
    const flaskApiUrl = `${flaskApiBaseUrl}/recommend`;
    const response = await axios.post(flaskApiUrl, data.data);
    return response.data;
  } catch (err) {
    console.error("Error updating/creating WishList:", err);
  }
};

exports.prepareDataForAlgorithem = async (data) => {
  try {
    userId = Math.floor(Math.random() * 1000000);
    ratings = data.ratings;
    const transformedData = ratings.map((entry) => {
      return {
        userId: userId,
        movieId: entry.movieId,
        rating: entry.rating,
      };
    });
    return transformedData;
  } catch (err) {
    console.error("Error updating/creating WishList:", err);
  }
};

exports.saveRecommendationToDb = async (data) => {
  try {
    const userId = data.userId;
    const recommendation = data.recommendation;
    const update = {
      id: userId,
      recommendations: recommendation,
    };
    const options = {
      upsert: true,
      new: true,
    };
    const newRecommendation = await recommendationModel.findOneAndUpdate(
      { id: userId },
      update,
      options
    );
    return newRecommendation;
  } catch (err) {
    console.error("Error saving recommendations:", err);
  }
};

exports.getRecommendation = async (data) => {
  try {
    const userId = data.userId;
    const user = await recommendationModel.findOne({ id: userId });
    if (user) {
      return user.recommendations;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error saving recommendations:", err);
  }
};
