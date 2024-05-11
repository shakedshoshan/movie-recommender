const preferences = require("../models/preferences");
const jwt = require('jsonwebtoken');

exports.savePreferences = async (idAndPreferences) => {
    try {
        console.log("perferencesService")
        console.log(idAndPreferences)
        const response = await preferences.create({id: idAndPreferences.userId, preferences: idAndPreferences.preferences });
        return response;
      } catch (error) {
        console.error("Failed to save new user to db:", error);
        throw error;
      }
};

exports.fetchPreferences = async (id) => {
  try {
    console.log("perferencesService")
    console.log(id)
    const response = await preferences.findOne({id: id});
    return response;
  } catch (error) {
    console.error("Failed to save new user to db:", error);
    throw error;
  }
};


exports.getUserIdFromToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = decoded.userId;
    return userId;
} catch (error) {
    console.error("JWT Verification Error:", error.message);
    res.status(400).json({ error: "Failed to verify JWT" });
}
};

