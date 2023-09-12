const userModel = require("../model/userModel");

module.exports = {
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
  getUserbyid: async (user_id) => {
    try {
      const response = await userModel.getUserById(user_id);
      if (response) {
        return response;
      }
      return "User does not  exist";
    } catch (e) {
      console.log(e);
    }
  },
};
