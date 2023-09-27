const storeService = require("../service/storeService");
const {
  storeRegisterSchema,
} = require("./validationSchema/registerStoreSchema");
module.exports = {
  getAllStores: async function (req, res) {
    try {
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
  createStore: async function (req, res) {
    try {
      const { error } = storeRegisterSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ msg: error.message });
      }
      const response = storeService.createStore(req.body);
      res.send(response);
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
  getStoreById: async function (req, res) {
    try {
      const store_id = req.body.store_id;
      const store_name = req.body.store_id;
      res.send(store_id, store_name);
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
  updateStore: async function (req, res) {
    try {
      const store_id = req.body.store_id;
      const store_name = req.body.store_id;
      res.send(store_id, store_name);
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
  deleteStore: async function (req, res) {
    try {
      const store_id = req.body.store_id;
      const store_name = req.body.store_id;
      res.send(store_id, store_name);
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
};
