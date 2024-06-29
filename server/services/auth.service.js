const userAuth = require("../models/userAuth");
const jwt = require("jsonwebtoken");

exports.createNewUser = async (cradentials) => {
  try {
    const response = await userAuth.create({
      id: cradentials.id,
      userName: cradentials.userName,
      password: cradentials.password,
    });
    return response;
  } catch (error) {
    console.error("Failed to save new user to db:", error);
    throw error;
  }
};

exports.findExistingUserByUserName = async (userNameFormController) => {
  try {
    const user = await userAuth.findOne({ userName: userNameFormController });
    return user;
  } catch (error) {
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
