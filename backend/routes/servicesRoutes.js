const express = require("express");
const {
  createService,
  getServices,
  getService,
  deleteService,
  updateService,
} = require("../controllers/ServicesController");

const router = express.Router();

// Get all workouts
router.get("/", getServices);

// Get a single workout
router.get("/:id", getService);

// Post a new workout
router.post("/", createService);

// Delete a workout
router.delete("/:id", deleteService);

// Update a workout
router.patch("/:id", updateService);

module.exports = router;
