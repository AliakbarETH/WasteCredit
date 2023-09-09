const router = require("express").Router();
const { send_otp_to_email } = require("../controller/otpController");
router.post("/email/otp", send_otp_to_email);

module.exports = router;
