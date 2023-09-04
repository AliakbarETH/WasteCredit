const authService = require("../service/authService");
const { schema, loginSchema } = require("./userSchema");
module.exports = {
  signup: async function (req, res) {
    try {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({ msg: error.message });
      }

      const response = await authService.createUser(req.body);
      res.send(response);
    } catch (e) {
      console.log(e);
    }
  },
  updateUser: async function (req, res) {
    try {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({ msg: error.message });
      }
      id = req.query.id;
      const response = await authService.updateUser(id, req.body);

      res.send(response);
    } catch (e) {
      console.log(e);
    }
  },
  login: async function (req, res) {
    try {
      const { error } = loginSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ msg: error.message });
      }

      const response = await authService.login(req.body);
      res.send(response);
    } catch (e) {
      console.log(e);
    }
  },
};
