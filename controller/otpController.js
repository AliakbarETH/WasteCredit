module.exports = {
  send_otp_to_email: async function (req, res) {
    try {
      const { email, type } = req.body;
      if (!email) {
        const response = { Status: "Failure", Details: "Email not provided" };
        return res.status(400).send(response);
      }
      if (!type) {
        const response = { Status: "Failure", Details: "Type not provided" };
        return res.status(400).send(response);
      }
    } catch (error) {
      throw error;
    }
  },
};
