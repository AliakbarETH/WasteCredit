var otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const otpModel = require("../model/otpModel");

module.exports = {
  send_otp: async function (email, type) {
    //Generate OTP
    const otp = otpGenerator.generate(6, {
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });
    const now = new Date();
    const expiration_time = AddMinutesToDate(now, 10);
    const otp_instance = await otpModel.createOTP(otp, expiration_time);

    // Create details object containing the email and otp id
    var details = {
      timestamp: now,
      check: email,
      success: true,
      message: "OTP sent to user",
      otp_id: otp_instance.id,
    };

    // Encrypt the details object
    const encoded = await encode(JSON.stringify(details));

    //Choose message template according type
    if (type) {
      if (type == "VERIFICATION") {
        const {
          message,
          subject_mail,
        } = require("../templates/email/verification");
        email_message = message(otp);
        email_subject = subject_mail;
      } else if (type == "FORGET") {
        const { message, subject_mail } = require("../templates/email/forget");
        email_message = message(otp);
        email_subject = subject_mail;
      } else {
        const response = {
          Status: "Failure",
          Details: "Incorrect Type Provided",
        };
        return response;
      }
    }
    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: `${process.env.EMAIL_ADDRESS}`,
        pass: `${process.env.EMAIL_PASSWORD}`,
      },
    });

    const mailOptions = {
      from: `"Waste Credit"<${process.env.EMAIL_ADDRESS}>`,
      to: `${email}`,
      subject: email_subject,
      text: email_message,
    };

    await transporter.verify();

    //Send Email
    await transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        const response = {
          Status: "Failure",
          Details: err,
        };
        return response;
      } else {
        return res.send({ Status: "Success", Details: encoded });
      }
    });
  },
};
