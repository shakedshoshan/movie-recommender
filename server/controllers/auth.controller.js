const authService = require("../services/auth.service");
const userAuth = require("../models/userAuth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const cookie = require("cookie");
const cookieParser = require("cookie-parser");

exports.signUp = async (req, res) => {
  try {
    const user = await authService.findExistingUserByUserName(
      req.body.userName
    );
    if (!user) {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      const uniqueUserId = uuid.v4();
      const newUser = await authService.createNewUser({
        id: uniqueUserId,
        userName: req.body.userName,
        password: hashPassword,
      });

      if (newUser) {
        const token = jwt.sign(
          { userId: newUser.id },
          process.env.TOKEN_SECRET,
          { expiresIn: "1h" }
        );
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", token, { httpOnly: false, maxAge: 60 * 60 })
        );
        console.log("Succesful login");
        res.status(200).json({ token });
      } else {
        res.status(400).json({ error: "Failed to create new user" });
      }
    } else {
      res.status(400).json({ error: "This username already exists" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.logIn = async (req, res) => {
  try {
    console.log(req.body.userName);
    const user = await authService.findExistingUserByUserName(
      req.body.userName
    );
    if (user) {
      let submittedPass = req.body.password;
      let storedPass = user.password;
      const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
      if (passwordMatch) {
        console.log(user.id);
        const token = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, {
          expiresIn: "1h",
        });
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", token, { httpOnly: false, maxAge: 60 * 60 })
        );
        console.log("Succesful login");
        res.status(200).json({ token });
      } else {
        console.log("WrongPassword");
        res.status(400).json({ error: "Wrong Password" });
      }
    } else {
      console.log("Wrong User Name");
      res.status(400).json({ error: "Wrong User Name" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getIdFromToken = async (req, res) => {
  try {
    const token = req.body.tokenValue;
    console.log(token);
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = decoded.userId;
    if (!userId) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(userId);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
