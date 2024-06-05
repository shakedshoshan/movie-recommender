const ratingService = require("../services/rating.service");
const authService = require("../services/auth.service");

exports.setRatings = async (req, res) => {
    try {
        const userId = await authService.getUserIdFromToken(req.body.token);

        const responseFromDb = await ratingService.setRating({userId: userId, movieId: req.body.movieId, rating: req.body.rating });
        if(responseFromDb){
            res.status(200).json({ rating: {responseFromDb} });
        }
        else {
            res.status(400).json({ error: "Failed to create new user" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
};

exports.getRatings = async (req, res) => {
    try {
        const userId = await authService.getUserIdFromToken(req.body.token);
        const responseFromDb = await ratingService.getRating({userId: userId, movieId: req.body.movieId });
        res.status(200).json({ rating: {responseFromDb} });
      } catch (error) {
        res.status(400).json({ error });
      }
};


// exports.getAllRatings = async (req, res) => {
//   try {
//       const userId = await authService.getUserIdFromToken(req.body.token);
//       const responseFromDb = await ratingService.getAllRating({userId: userId});
//       console.log(responseFromDb);
//       res.status(200).json({ rating: {responseFromDb} });
//     } catch (error) {
//       res.status(400).json({ error });
//     }
// };
exports.getAllRatings = async (req, res) => {
  try {
      console.log(req.body.userId)
      const responseFromDb = await ratingService.getAllRating({userId: req.body.userId});
      console.log(responseFromDb);
      res.status(200).json({ rating: {responseFromDb} });
    } catch (error) {
      res.status(400).json({ error });
    }
};