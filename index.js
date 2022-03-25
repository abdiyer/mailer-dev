// Import express into our project
const express = require("express");

const multer = require("multer");

// Creating an instance of express function
const app = express();

// The port we want our project to run on
const PORT = 3000;

app.use(express.static("public"));


// Render the index.html when the user visit our project port
app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

// Express allows us to listen to the PORT and trigger a console.log() when you visit the port
app.listen(PORT, () => {
  console.log(`Server is 🏃‍♂️ on port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/send_email", (req, res) => {
  console.log(req.body);
});