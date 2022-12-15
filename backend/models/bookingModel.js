const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  treatmentId: {
    type: String,
    required: true,
  },
  treatmentType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: new Date.now(),
  },
  slot: {
    type: String,
    required: true,
  },
  patientEmail: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  createdAt: {
    default: new Date.now(),
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
