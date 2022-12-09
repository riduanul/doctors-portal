const express = require("express");
const dotenv = require("dotenv");
const workoutRoutes = require("./routes/workeoutRoutes");
const database = require("./database");
const cors = require("cors");
//express app
const app = express();
dotenv.config();
// Database
database();

// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`listening from http://localhost:${process.env.PORT}`);
});
