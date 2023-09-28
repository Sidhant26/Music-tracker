const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("../models/user.model");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Music-tracker");

app.get("/api/hello", (req, res) => {
  res.send("Hello world");
});

app.post("/api/register", async (req, res) => {
  console.log("body", req.body);
  try {
    await User.create({
      name: req.body.name,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", err });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    name: req.body.name,
    password: req.body.password,
  });

  if (user) {
    return res.json({ status: "ok", user: true });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.listen(5000, () => {
  console.log("Server started");
});
