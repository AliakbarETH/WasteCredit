const storeService = require("../service/storeService");
const {
  storeRegisterSchema,
} = require("./validationSchema/registerStoreSchema");
module.exports = {
  createStore: async function (req, res) {
    try {
      const { error } = storeRegisterSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ msg: error.message });
      }
      const response = await storeService.createStore(req.body);
      console.log(response);
      return res.status(400).json(response);
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
  getStoreById: async function (req, res) {
    try {
      const id = req.body.id;
      const response = await storeService.getStorebyid(id);
      res.send(response);
    } catch (e) {
      const response = { Status: "Failure", Details: e.message };
      return res.status(400).send(response);
    }
  },
  updateStore: async function (req, res) {
    try {
      const { error } = storeRegisterSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ msg: error.message });
      }
      id = req.query.id;
      const response = await storeService.updateStore(id, req.body);

      res.send(response);
    } catch (e) {
      const response = { Status: "Failure", Details: e.message };
      return res.status(400).send(response);
    }
  },
  deleteStore: async function (req, res) {
    try {
      const { id } = req.params;
      const response = await storeService.deleteStore(id);
      res.send(response);
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
  getAllStores: async function (req, res) {
    try {
      const response = await storeService.getAllStores();
      res.send(response);
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
};
