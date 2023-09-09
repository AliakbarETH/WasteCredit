var otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const otpModel = require("../model/otpModel");
const dotenv = require("dotenv").config();
const { encode } = require("../middleware/crypt");

module.exports = {
  send_otp: async function (email, type) {
    //Generate OTP
    const otp = otpGenerator.generate(6, {
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });
    console.log(otp);
    const now = new Date();
    console.log(now);
    const expiration_time = AddMinutesToDate(now, 10);
    console.log(expiration_time);
    const otp_instance = await otpModel.createOTP(otp, expiration_time);
    // console.log(otp_instance);
    // Create details object containing the email and otp id
    var details = {
      timestamp: now,
      check: email,
      success: true,
      message: "OTP sent to user",
      otp_id: otp_instance.id,
    };
    // console.log(details);
    // Encrypt the details object
    // const encoded = await encode(JSON.stringify(details));

    //Choose message template according type
    if (type) {
      if (type == "VERIFICATION") {
        console.log("IN VERIFICATION");
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
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    console.log(transporter);
    const mailOptions = {
      from: "alyanalam780@gmail.com",
      to: `${email}`,
      subject: email_subject,
      text: email_message,
    };

    await transporter.verify();

    //Send Email
    // await transporter.sendMail(mailOptions, (err, response) => {
    //   if (err) {
    //     const response = {
    //       Status: "Failure",
    //       Details: err,
    //     };
    //     console.log(response);
    //     return response;
    //   } else {
    //     // return res.send({ Status: "Success", Details: encoded });
    //     return res.send({ Status: "Success" });
    //   }
    // });
    // Send Email
    await transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        // console.log(err);
        // Handle the error here, maybe log it or return a response
        const errorResponse = {
          Status: "Failure",
          Details: err.message,
        };
        // console.error(errorResponse);
        return errorResponse;
        // Handle the error accordingly, e.g., return a response or log it
      } else {
        // console.log("Email sent successfully");
        // Handle the success case, e.g., return a success response
        const successResponse = {
          Status: "Success",
          Details: "Email sent successfully",
        };

        return successResponse;
        // Handle the success accordingly, e.g., return a response or log it
      }
    });

    // To add minutes to the current time
    function AddMinutesToDate(date, minutes) {
      return new Date(date.getTime() + minutes * 60000);
    }
  },
};
