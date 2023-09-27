const storeModel = require("../model/storeModel");

module.exports = {
  createStore: async (body) => {
    try {
      const existingStore = await storeModel.findStoreByEmail(body.email);
      if (existingStore) {
        return { error: "Store already exists" };
      }
      const response = await storeModel.createUser(body);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getStore: async (user_id) => {
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
