//load express
const express = require("express");
const path = require("path");

//require student data
const studentDb = require("./data/student");

//create app
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(3000, function () {
  console.log("listening on port 3000");
});

//mount route
app.get("/students-database", function (req, res) {
  const students = studentDb.getAll();
  //using student.ejs format
  res.render("student", { students });
});
