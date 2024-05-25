const preferencesService = require("../services/preferences.service");
const ratingService = require("../services/rating.service");
const authService = require("../services/auth.service");

exports.setRatings = async (req, res) => {
    try {
        console.log("setRatign")
        console.log(req.body.token)
        const userId = await authService.getUserIdFromToken(req.body.token);
        console.log(userId);

        const responseFromDb = await ratingService.setRating({userId: userId, movieId: req.body.movieId, rating: req.body.rating });
        console.log(responseFromDb);
        if(responseFromDb){
            res.status(200).json({ preferences: {responseFromDb} });
        }
        else {
            res.status(400).json({ error: "Failed to create new user" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
};