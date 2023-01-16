var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Vyshnavi Santhosh" });
});

router.get("/main", function (req, res, next) {
  res.render("index", { title: "Main" });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login page", firstlabel: "UserName" });
});

module.exports = router;
