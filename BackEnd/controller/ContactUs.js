const express = require("express");
const router = express.Router();

const Contact = require("../model/Contact");

// Home page route.
router.get("/", function (req, res) {
  res.send("Contact home page");
});

// About page route.
router.post("/contactus", async function (req, res) {
  const new_contact = new Contact({
    "name": req.body.name,
    "email": req.body.email,
    "subject": req.body.subject,
    "message": req.body.message

  });

  try {
    const dataToSave = await new_contact.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
