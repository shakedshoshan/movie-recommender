const express = require("express");
const authController = require("../controllers/auth.controller");
const preferencesController = require("../controllers/preferences.controller");
const ratingController = require("../controllers/rating.controller");
const router = express.Router();


router.post("/signUp", authController.signUp);
router.post("/logIn", authController.logIn);

router.post("/getIdFromToken", authController.getIdFromToken);

router.post("/setPreferences", preferencesController.setPreferences);
router.post("/fetchPreferences", preferencesController.fetchPreferences);

router.post("/setRatings", ratingController.setRatings);



module.exports = router;