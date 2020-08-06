const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");

// We'll need to load the env vars
require("dotenv").config();

// require our routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const characterRouter = require("./routes/characters");
const infosRouter = require("./routes/infos");

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
require("./config/database");
require("./config/passport");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// TODO Add session middleware here
app.use(
  session({
    secret: "AOCRocks!",
    resave: false,
    saveUninitialized: true,
  })
);

// Store user locally
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// TODO Add passport middleware here
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/", characterRouter);
app.use("/", infosRouter);

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
