const otpService = require("../service/otpService");

module.exports = {
  send_otp_to_email: async function (req, res) {
    try {
      const email = req.body.email;
      const type = req.body.type;
      if (!email) {
        const response = { Status: "Failure", Details: "Email not provided" };
        return res.status(400).send(response);
      }
      if (!type) {
        const response = { Status: "Failure", Details: "Type not provided" };
        return res.status(400).send(response);
      }
  
      const response = await otpService.send_otp(email, type);
   
      return res.send(response);
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
};
