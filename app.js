var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/jessie_yelp_camp", {
  useNewUrlParser: true
});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//Schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});
