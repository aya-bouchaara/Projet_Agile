//jshint esversion:6
require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
    cookie: { _expires: 100000000000000000000000000000000000000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(
  "mongodb+srv://azerty123:w6nTCAY9DNcBJA6p@cluster1.dp3aos9.mongodb.net/projet_Agile?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const userSchema = new mongoose.Schema({
  mode: String,
  email: String,
  password: String,
  name: String,
  secret: String,
});

const ideaSchema = new mongoose.Schema({
  title: String,
  idee: String,
  type: String,
  user: String,
  user_id: String,
});

const defiSchema = new mongoose.Schema({
  defi: String,
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

const Idea = new mongoose.model("Idea", ideaSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
  if (req.isAuthenticated()) {
    if (req.user.mode === "user") {
      res.render("home", { statut: 1 });
    } else {
      res.render("home", { statut: 2 });
    }
  } else {
    res.render("home", { statut: 0 });
  }
});

app.get("/propos", function (req, res) {
  if (req.isAuthenticated()) {
    res.render("propos", { statut: 1 });
  } else {
    res.render("propos", { statut: 0 });
  }
});

app.get("/contact", function (req, res) {
  if (req.isAuthenticated()) {
    res.render("contact", { statut: 1 });
  } else {
    res.render("contact", { statut: 0 });
  }
});

app.listen(3000, function (req, res) {
  console.log("Server started on port 3000");
});
