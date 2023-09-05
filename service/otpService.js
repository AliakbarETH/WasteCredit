var otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

module.exports = {
  send_otp: async function () {
    //Generate OTP
    const otp = otpGenerator.generate(6, {
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });
    const now = new Date();
    const expiration_time = AddMinutesToDate(now, 10);
  },
};
