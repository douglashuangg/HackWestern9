// import express from "express";
// import cors from "cors";
// import userinfo from "./api/userinfo.route.js";

const { response } = require("express");
const express = require("express");
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const User = require("../models/user");

// app.use(bodyParser.json());
// app.get("/", function (req, res) {
//   res.render("index", {});
// });
// app.use(express.json());

const uri =
  "mongodb+srv://jeffrey:03120312Jeff!@cluster0.emywofb.mongodb.net/Users?retryWrites=true&w=majority"; //
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// .then(() => console.log('connected'))
// .catch((err) => console.log(err));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("db connected");
});
db.collection("Users");

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static(__dirname + "/public"));

app.get("/login", function (req, res) {
  res.render("user");
});

app.post("/login", function (req, res) {
  console.log(req.body.username);
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  user.save(function (err) {
    if (err) {
      throw err;
    } else {
      res.render("user");
    }
  });
});

app.get("/api", (req, res) => {
  res.json({ message: "ligma balls" });
});

app.get("/getAllUserPosts", (req, res) => {
  res.json({ message: "ligma balls" });
});

app.post("/yourtimeline", (req, res) => {
  console.log(req.body);
  res.json({ status: "success" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
