const router = require("express").Router();
const { signup, updateUser, login } = require("../controller/authentication");

router.post("/signup", signup);
router.put("/updateUser", updateUser);
router.post("/login", login);

module.exports = router;
