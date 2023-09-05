const userModel = require("../model/userModel");
module.exports = {
  createUser: async function (body) {
    try {
      const existingUser = await userModel.findUserByEmail(body.email);
      if (existingUser) {
        return { error: "User already exists" };
      }
      const response = await userModel.createUser(body);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  updateUser: async (id, body) => {
    try {
      const getUser = await userModel.getUserById(id);
      if (getUser) {
        const response = await userModel.updateUser(id, body);

        return response;
      }
      return "User does not  exist";
    } catch (e) {
      console.log(e);
    }
  },

  login: async function (body) {
    try {
      const existingUser = await userModel.findUserByEmail(body.email);
      if (existingUser) {
        if (existingUser.dataValues.password === body.password) {
          return existingUser;
        } else {
          return "Password incorrect";
        }
      }
      return "Signup first";
    } catch (error) {
      console.log(error);
    }
  },
};
