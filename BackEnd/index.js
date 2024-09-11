

require('dotenv').config();

const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use(cors({
  origin: '*'
}))

const contactrouter = require("./controller/ContactUs")
app.use('/contact', contactrouter)


const authController = require('./controller/authentication controller/authController');
app.use('/register', authController);


const loginControl = require('./controller/authentication controller/loginAuthentication');
app.use('/login', loginControl);


app.get("/", function (req, res) {
  res.send("Walfare home page")
});


app.listen(5000, () => {
  console.log(`Server Started at ${5000}`)
})