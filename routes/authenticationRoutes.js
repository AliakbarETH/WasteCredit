var express = require("express");
var router = express.Router();

const { userLogin, userSignup } = require("../controller/authentication");

router.post("/login", userLogin);
router.get("/signup", userSignup);

module.exports = router;
