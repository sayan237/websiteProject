const User = require('../../model/User_model/user');
// const user = require('../../model/User_model/Login')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Register  home page");
});


// About page route.
router.post("/registerpage", async function (req, res) {
  const new_register = new User({
    "name": req.body.name,
    "email": req.body.email,
    "password": req.body.password,
    "phone": req.body.phone,
    "address": req.body.address
  });
  try {
    const dataToSave = await new_register.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});




// router.post("/loginpage", async function (req, res) {
//   const old_login = new User({
//     "email": req.body.email,
//     "password": req.body.password
//   });

//   try {
//     const dataToSave = await old_login.save();
//     res.status(200).json(dataToSave);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// router.post('/loginpage', async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) return res.status(401).send('Invalid email or password');
//   const isValidPassword = await bcrypt.compare(password, user.password);
//   if (!isValidPassword) return res.status(401).send('Invalid email or password');
//   const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
//   res.send({ token });
// });







module.exports = router;