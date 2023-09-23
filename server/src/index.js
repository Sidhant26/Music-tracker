const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());

mongoose.connect(
  "mongodb+srv://sidhant26sood:<>@cluster0.14ymflo.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/api/hello", (req, res) => {
  res.send("Hello world");
});

app.post("/api/register", async (req, res) => {
  console.log("body", req.body);
  try {
    await UserActivation.create({
      name: req.body.name,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", err });
  }
});

app.listen(5000, () => {
  console.log("Server started");
});
