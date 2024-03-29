const express = require("express");
const {
  getBooking,
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingConroller");
const router = express.Router();

// Get all Bookings
router.get("/", getBookings);

// Get a Booking
router.get("/", getBooking);

// Create a Booking
router.post("/", createBooking);

// Delete a Booking
router.delete("/", deleteBooking);

// Upadate a Booking
router.put("/", updateBooking);

module.exports = router;
