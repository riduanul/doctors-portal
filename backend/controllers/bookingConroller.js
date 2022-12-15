const Booking = require("../models/bookingModel");
const mongoose = require("mongoose");

//Get All Bookings
export const getBookings = async (req, res) => {
  const bookings = await Booking.find({});
  res.status(200).json({
    bookings,
  });
};

//Get A single Booking

export const getBooking = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({
      error: "Invalid Id",
    });
  }

  const booking = await Booking.findById(id);
  if (!booking) {
    res.status(500).json({
      error: "No such a booking Found!",
    });
  } else {
    res.status(200).json({
      booking,
    });
  }
};

// Create a New Booking
export const createBooking = async (req, res) => {
  const { booking } = req.body;

  // add booking to database
  try {
    const booking = await Booking.create({ booking });
    res.status(200).json({
      booking,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// Delate a Booking

export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({
      message: "Invalid Id",
    });
  }

  const booking = await Booking.findOneAndDelete({ _id: id });
  if (booking) {
    res.status(200).json({
      memssage: "Successfully Delated!",
    });
  } else {
    res.status(400).json({
      error: "No such a Booking!",
    });
  }
};

// Update a Booking

export const updateBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({
      error: "Invalid Id",
    });
  }
  const booking = await Booking.findByIdAndUpdate(
    {
      _id: id,
    },
    { ...req.body }
  );
  if (booking) {
    res.status(200).json({
      message: "Successfully Updated!",
    });
  } else {
    res.status(400).json({
      error: "No such a Booking!",
    });
  }
};

module.exports = {
  getBooking,
  getBookings,
  createBooking,
  deleteBooking,
  updateBooking,
};
