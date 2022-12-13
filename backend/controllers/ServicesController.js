const Services = require("../models/servicesModel");
const mongoose = require("mongoose");

// get All Services
const getServices = async (req, res) => {
  const services = await Services.find({});
  res.status(200).json({
    services,
  });
};
// Get a single Service
const getService = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Service" });
  }
  const service = await Services.findById(id);
  if (!service) {
    return res.status(404).json({
      error: "No such service",
    });
  } else {
    res.status(200).json({
      service,
    });
  }
};
// create a new service
const createService = async (req, res) => {
  const { name, slots } = req.body;

  // add doc to db
  try {
    const service = await Services.create({ name, slots });
    res.status(200).json({
      service,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};
// delete a service
const deleteService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such service" });
  }

  const service = await Services.findOneAndDelete({ _id: id });
  if (service) {
    res.status(200).json({
      message: "Deleted Successfully!",
    });
  } else {
    res.status(400).json({
      error: "No such service",
    });
  }
};
// update a service
const updateService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such service" });
  }

  const service = await Services.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!service) {
    return res.status(404).json({
      error: "No such service",
    });
  } else {
    res.status(200).json({
      message: "Updated Successfully!",
    });
  }
};

module.exports = {
  createService,
  getServices,
  getService,
  deleteService,
  updateService,
};
