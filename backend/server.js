const express = require("express");
var bodyParser = require("body-parser");
let model = require("./crud.js");
const PORT = process.env.PORT || 3001;
const app = express();
const ejs = require("ejs");
app.use(express.json());
app.set("view engine", "ejs");

model.read("jefftheli");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);



app.use(express.static(__dirname + "/public"));

app.post("/login", (req, res) => {
  username = req.body.username
  password = req.body.password
  const checkLogin = model.read(username);
  if (checkLogin.username == username && checkLogin.password == password) {
    console.log("Login successful");
    //res.redirect("/survey")
  } 
});

app.get("/api", (req, res) => {
  res.json({ message: "ligma balls" });
});

app.get("/getAllUserPosts", (req, res) => {
  res.json({ message: "ligma balls" });
});

app.post("/yourtimeline", (req, res) => {
  console.log(req.body);
  model.savePosts(req.body);
  res.json({ status: "success" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
