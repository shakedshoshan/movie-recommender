const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
// const router = require('./routes/router')
const app = express();



mongoose
  .connect("mongodb+srv://davidkras:test1234@webapplication.sewgev3.mongodb.net/MovieRecommendation") // move to env file
  .then((result) => console.log("Connected to db"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.static("public")); // Serve static files from the public directory


app.listen(PORT, (error) => {
    if (!error) {
      console.log(
        `Server is Successfully Running, and App is listening on port ${PORT}`
      );
    } else {
      console.log("Error occurred, server can't start", error);
    }
  });

