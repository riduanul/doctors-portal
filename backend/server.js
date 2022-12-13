const express = require("express");
const dotenv = require("dotenv");
const servicesRoutes = require("./routes/servicesRoutes");
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
app.use("/api/services", servicesRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`listening from http://localhost:${process.env.PORT}`);
});
