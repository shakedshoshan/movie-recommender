const express = require("express");
const authController = require("../controllers/auth.controller");
const preferencesController = require("../controllers/preferences.controller");
const router = express.Router();


router.post("/signUp", authController.signUp);
router.post("/logIn", authController.logIn);

router.get("/getIdFromToken", authController.getIdFromToken);

router.post("/setPreferences", preferencesController.setPreferences);
router.get("/fetchPreferences", preferencesController.fetchPreferences);



module.exports = router;