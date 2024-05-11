require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cookieParser = require('cookie-parser');


const app = express();

const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI)
  .then((result) => console.log("Connected to db"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 4000;

// Define CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend origin
  credentials: true // Allow credentials (cookies)
};

// Use CORS middleware with options
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/", routes);
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
