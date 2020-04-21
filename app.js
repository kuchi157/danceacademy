const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

//EXPRESS
app.use("/static", express.static("static"));
app.use(express.urlencoded());

//PUG
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//ENDPOINTS
const params = {};
app.get("/", (req, res) => {
  res.status(200).render("home.pug", params);
});

app.get("/contact", (req, res) => {
  res.status(200).render("contact.pug", params);
});

//SERVER STARTING
app.listen(port, () => {
  console.log(`the application started successfully on port ${port}`);
});
