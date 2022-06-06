const express = require("express");
const cors = require("cors");

//App Config
const app = express();
const port = process.env.PORT || 5000;

const users = ["userOne", "userTwo", "userThree"];

//Middlewares
app.use(cors());
//DB config

//API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("CLOTHINGIFY!");
});

app.get("/api", (req, res) => {
  res.json({ users });
});

app.listen(port, () => {
  console.log("listening in port 5000");
});
