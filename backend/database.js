const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect(process.env.DB_URI, {})
    .then(() => console.log("Database connected succesfully!"))
    .catch((err) => console.log(err));
};

module.exports = database;
