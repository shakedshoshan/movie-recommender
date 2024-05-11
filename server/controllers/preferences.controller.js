const preferencesService = require("../services/preferences.service");
const preferences = require("../models/preferences");
const jwt = require('jsonwebtoken');

exports.setPreferences = async (req, res) => {
    try {
        console.log(req.body.preferences);
        console.log(req.body.token);
        console.log("here");
        console.log("token");
        console.log(req.body.token);
        const userId = await preferencesService.getUserIdFromToken(req.body.token);
        console.log(userId);
        const responseFromDb = await preferencesService.savePreferences({userId: userId, preferences: req.body.preferences });


        // const responseFromDb = await savePreferences({
        //     inputGener1: req.body.inputGener1,
        //     inputGener2: req.body.inputGener2,
        //     inputGener3: req.body.inputGener3,
        //     inputActor1: req.body.inputActor1,
        //     inputActor2: req.body.inputActor2,
        //     inputLatestYear: req.body.inputLatestYear,
        //     inputRunTime: req.body.inputRunTime,
        //     inputOrigin: req.body.inputOrigin,
        //     inputStudio: req.body.inputStudio
        // });
        if(responseFromDb){
            res.status(200).json({ preferences: {responseFromDb} });
        }
        else {
            res.status(400).json({ error: "Failed to create new user" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
};


exports.fetchPreferences = async (req, res) => {
    try {
        console.log(req.body.token);
        const userId = await preferencesService.getUserIdFromToken(req.body.token);
        console.log(userId);
        const responseFromDb = await preferencesService.fetchPreferences(userId);
        if(responseFromDb){
            res.status(200).json({ preferences: {responseFromDb} });
        }
        else {
            res.status(400).json({ error: "Failed to create new user" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
};
