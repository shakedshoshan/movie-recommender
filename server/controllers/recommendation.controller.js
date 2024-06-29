const recommendationService = require("../services/recommendation.service");
const authService = require("../services/auth.service");
const ratingService = require("../services/rating.service");
const recommendation = require("../models/recommendation");

exports.generateRecommendation = async (req, res) => {
  try {
    console.log("generateRecommendation");
    const userId = await authService.getUserIdFromToken(req.body.token);
    const ratings = await ratingService.getAllRating({ userId: userId });
    if (ratings) {
      dataForAlgorithem = await recommendationService.prepareDataForAlgorithem({
        userId: userId,
        ratings: ratings,
      });
      if (dataForAlgorithem) {
        const responseFromAlgorithem =
          await recommendationService.generateRecommendation({
            data: dataForAlgorithem,
          });
        if (responseFromAlgorithem) {
          const responseFromDb =
            await recommendationService.saveRecommendationToDb({
              userId: userId,
              recommendation: responseFromAlgorithem.prediction,
            });
          if (responseFromDb) {
            res
              .status(200)
              .json({ recommendation: responseFromDb.recommendations });
          } else {
            res
              .status(400)
              .json({ error: "Failed to generate recommendation" });
          }
        } else {
          res.status(400).json({ error: "Failed to generate recommendation" });
        }
      } else {
        res
          .status(400)
          .json({ error: "Failed to prepare data for algorithem" });
      }
      return dataForAlgorithem;
    } else {
      res.status(400).json({ error: "Failed to get ratings" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getRecommendation = async (req, res) => {
  try {
    console.log("getRecommendation");
    const userId = await authService.getUserIdFromToken(req.body.token);
    const recommendation = await recommendationService.getRecommendation({
      userId: userId,
    });
    if (recommendation) {
      res.status(200).json({ recommendation: recommendation });
    } else {
      console.log("In else");
      const ratings = await ratingService.getAllRating({ userId: userId });
      if (ratings) {
        dataForAlgorithem =
          await recommendationService.prepareDataForAlgorithem({
            userId: userId,
            ratings: ratings,
          });
        if (dataForAlgorithem) {
          const responseFromAlgorithem =
            await recommendationService.generateRecommendation({
              data: dataForAlgorithem,
            });
          if (responseFromAlgorithem) {
            const responseFromDb =
              await recommendationService.saveRecommendationToDb({
                userId: userId,
                recommendation: responseFromAlgorithem.prediction,
              });
            if (responseFromDb) {
              res
                .status(200)
                .json({ recommendation: responseFromDb.recommendations });
            } else {
              res
                .status(400)
                .json({ error: "Failed to generate recommendation" });
            }
          } else {
            res
              .status(400)
              .json({ error: "Failed to generate recommendation" });
          }
        } else {
          res
            .status(400)
            .json({ error: "Failed to prepare data for algorithem" });
        }
        return dataForAlgorithem;
      } else {
        res.status(400).json({ error: "Failed to get ratings" });
      }
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
