const wishListService = require("../services/wishList.service");
const authService = require("../services/auth.service");

exports.addToWishList = async (req, res) => {
    try {
        const userId = await authService.getUserIdFromToken(req.body.token);

        const responseFromDb = await wishListService.addToWishList({userId: userId, movieId: req.body.movieId});
        if(responseFromDb){
            res.status(200).json({ wishList: responseFromDb });
        }
        else {
            res.status(400).json({ error: "Failed to create new user" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
};

exports.removeFromWishList = async (req, res) => {
  try {
      const userId = await authService.getUserIdFromToken(req.body.token);

      

      const responseFromDb = await wishListService.removeFromWishList({userId: userId, movieId: req.body.movieId});
      console.log(`BEfore if ${responseFromDb}`)
      if(responseFromDb){
        console.log(`response remove ${responseFromDb}`)
          res.status(200).json({ wishList: responseFromDb });
      }
      else {
          res.status(400).json({ error: `Failed to remove ${movieId}`});
      }
    } catch (error) {
      res.status(400).json({ error });
    }
};

exports.getWishList = async (req, res) => {
    try {
        const userId = await authService.getUserIdFromToken(req.body.token);

        const responseFromDb = await wishListService.getWishList({userId: userId });
        res.status(200).json({ wishList: {responseFromDb} });
      } catch (error) {
        res.status(400).json({ error });
      }
};

exports.checkIfExistsIntWishList = async (req, res) => {
  try {
      const userId = await authService.getUserIdFromToken(req.body.token);
      const responseFromDb = await wishListService.checkIfExistsIntWishList({userId: userId, movieId: req.body.movieId});
      res.status(200).json({ wishList: responseFromDb });
    } catch (error) {
      res.status(400).json({ error });
    }
};