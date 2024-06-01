const preferences = require("../models/preferences");
const jwt = require('jsonwebtoken');

exports.savePreferences = async (idAndPreferences) => {
  try {
      const user = await preferences.findOne({ id: idAndPreferences.userId });
      if (user){
        user.preferences = idAndPreferences.preferences
        user.save();
        return user;
      }
      else{
        console.log("user wasn't found")
        const response = await preferences.create({id: idAndPreferences.userId, preferences: idAndPreferences.preferences });
        return response;
      }
    } catch (error) {
      console.error("Failed to save new user to db:", error);
      throw error;
    }
};
exports.fetchPreferences = async (id) => {
  try {
    const response = await preferences.findOne({id: id});
    return response;
  } catch (error) {
    console.error("Failed to save new user to db:", error);
    throw error;
  }
};




