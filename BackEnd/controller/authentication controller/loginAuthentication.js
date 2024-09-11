const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const User = require("../../model/User_model/Login");

// Home page route.
router.get("/", function (req, res) {
  res.send("login home page");
});

// About page route.
router.post("/loginpage", async function (req, res) {
  const old_login = new User({
    "email": req.body.email,
    "password": req.body.password
  });

  try {
    const dataToSave = await old_login.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


module.exports = router;