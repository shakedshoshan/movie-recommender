const preferencesService = require("../services/preferences.service");
const authService = require("../services/auth.service");
const preferences = require("../models/preferences");
const jwt = require("jsonwebtoken");

exports.setPreferences = async (req, res) => {
  try {
    const userId = await authService.getUserIdFromToken(req.body.token);
    const responseFromDb = await preferencesService.savePreferences({
      userId: userId,
      preferences: req.body.preferences,
    });
    if (responseFromDb) {
      res.status(200).json({ preferences: { responseFromDb } });
    } else {
      res.status(400).json({ error: "Failed to create new user" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.fetchPreferences = async (req, res) => {
  try {
    const userId = await authService.getUserIdFromToken(req.body.tokenValue);
    const responseFromDb = await preferencesService.fetchPreferences(userId);
    if (responseFromDb) {
      res.status(200).json({ preferences: { responseFromDb } });
    } else {
      res.status(400).json({ error: "Failed to create new user" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
