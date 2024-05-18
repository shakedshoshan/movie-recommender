const authService = require("../services/auth.service");
const userAuth = require("../models/userAuth");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const cookie = require("cookie");
const cookieParser = require('cookie-parser');

exports.signUp = async (req, res) => {
  try {
    const user = await authService.findExistingUserByUserName(req.body.userName);
    if (!user) {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      const uniqueUserId = uuid.v4();
      const newUser = await authService.createNewUser({
        id: uniqueUserId,
        userName: req.body.userName,
        password: hashPassword
      });

      if (newUser) {
        const token = jwt.sign({ userId: newUser.id }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
        res.setHeader("Set-Cookie", cookie.serialize("token", token, { httpOnly: false, maxAge: 60 * 60 }));
        console.log("Succesful login")
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
    console.log("here0")
    console.log(req.body.userName)
    const user = await authService.findExistingUserByUserName(req.body.userName);
    console.log("here1")
    if(user){
      let submittedPass = req.body.password; 
      let storedPass = user.password; 

      const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
      if (passwordMatch) {
        console.log("login");
        console.log(user.id);
        console.log("login");
        const token = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
        res.setHeader("Set-Cookie", cookie.serialize("token", token, { httpOnly: false, maxAge: 60 * 60 }));
        console.log("Succesful login")
    
        res.status(200).json({ token });
      }
      else {
        console.log("WrongPassword")
        res.status(400).json({ error: "Wrong Password" });
      }
    }
    else{
      console.log("Wrong User Name")
      res.status(400).json({ error: "Wrong User Name" });
    }
    } catch (error) {
      res.status(400).json({ error });
    }
};

exports.getIdFromToken = async (req, res) => {
  try {
    // Extract the cookie from the request headers using cookie-parser

    console.log("ASdsa")
    const token = req.cookies.token; // Access the 'token' cookie
    // console.log(req.cookies)
    // console.log(token)
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Verify and decode the JWT token
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    // Access the userId from the decoded token
    const userId = decoded.userId;
    console.log(`id: ${userId}`)

    // Now you have the userId, you can perform any actions you need
    // For example, find the user based on the userId

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Do whatever you need with the user object
    res.status(200).json({ userId: user.id});
  } catch (error) {
    // Handle any errors, including token verification errors
    res.status(500).json({ error: "Internal Server Error" });
  }
};




