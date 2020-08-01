const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const passport = require("passport");

// We'll need to load the env vars
require("dotenv").config();

// require our routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
require("./config/database");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO Add session middleware here
app.use(
  session({
    secret: "AOCRocks!",
    resave: false,
    saveUninitialized: true,
  })
);

// TODO Add passport middleware here
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// TODO Add passport middleware here

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
