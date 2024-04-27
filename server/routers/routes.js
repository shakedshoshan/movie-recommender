const express = require("express");
const router = express.Router();


router.post("/login/?", AuthController.login);

module.exports = router;