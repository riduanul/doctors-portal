const express = require("express");
const Users = require("../models/userModel");

export const updateOrCreateUser = async (req, res) => {
  const user = req.body;
  const email = req.params.email;
  const filter = { email: email };
  const options = { upesert: true };
  const updateDoc = {
    $set: { user },
  };
  const result = await Users.updateOne(filter, updateDoc, options);
  res.status(200).json({
    result,
  });
};
