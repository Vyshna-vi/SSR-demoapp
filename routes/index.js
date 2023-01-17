var express = require("express");
var router = express.Router();
const { allUser, product, login, index, main } = require("../controlers");

/* GET home page. */
router.get("/home", main);

router.get("/main", index);

router.get("/login", login);

router.get("/product", product);

router.get("/users-list", allUser);

module.exports = router;
