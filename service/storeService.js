const { log } = require("console");
const storeModel = require("../model/storeModel");

module.exports = {
  createStore: async (body) => {
    try {
      console.log("1");
      const existingStore = await storeModel.findStoreByEmail(body.email);
      if (existingStore) {
        return { error: "Store already exists" };
      }
      const response = await storeModel.createStore(body);
      console.log(response);
      const res = {
        Status: "Success",
        Details: "Store Created.",
      };
      return res;
    } catch (error) {
      const response = { Status: "Failure", Details: "Unable to create store" };
      return response;
    }
  },
  getStorebyid:async(id) =>{
    try {
      const response = await storeModel.getStoreById(id);
      if (response) {
        return response;
      }
      return "Store does not  exist";
    } catch (e) {
      console.log(e);
    }
  }
};
