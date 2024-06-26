const express = require("express");
const authController = require("../controllers/auth.controller");
const preferencesController = require("../controllers/preferences.controller");
const ratingController = require("../controllers/rating.controller");
const wishListController = require("../controllers/wishList.controller");
const recommendationController = require("../controllers/recommendation.controller");
const router = express.Router();


router.post("/signUp", authController.signUp);
router.post("/logIn", authController.logIn);

router.post("/getIdFromToken", authController.getIdFromToken);

router.post("/setPreferences", preferencesController.setPreferences);
router.post("/fetchPreferences", preferencesController.fetchPreferences);

router.post("/setRatings", ratingController.setRatings);
router.post("/getRatings", ratingController.getRatings);
router.post("/getAllRatings", ratingController.getAllRatings);

router.post("/addToWishList", wishListController.addToWishList);
router.post("/getWishList", wishListController.getWishList);
router.post("/removeFromWishList", wishListController.removeFromWishList);
router.post("/checkIfExistsIntWishList", wishListController.checkIfExistsIntWishList);

router.post("/getRecommendation", recommendationController.getRecommendation);
router.post("/generateRecommendation", recommendationController.generateRecommendation);



module.exports = router;