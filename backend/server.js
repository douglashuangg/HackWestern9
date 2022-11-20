const express = require("express");
var bodyParser = require("body-parser");
let model = require("./crud.js");
const PORT = process.env.PORT || 3001;
const app = express();
const ejs = require("ejs");
app.use(express.json());
app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

model.findOneListingByName();

app.use(express.static(__dirname + "/public"));

app.get("/login", (req, res) => {
  res.render("user");
});

app.post("/login", (req, res) => {});

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
