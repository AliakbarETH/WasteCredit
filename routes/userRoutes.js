const router = require("express").Router();
const { getUser, updateUser } = require("../controller/userController");

router.post("/getuser", getUser);
router.put("/updateUser", updateUser);

module.exports = router;
