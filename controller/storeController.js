module.exports = {
  getAllStores: async function (req, res) {
    try {
      const store_id = req.body.store_id;
      res.send(store_id);
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
  createStore: async function (req, res) {
    try {
        const store_id = req.body.store_id;
        const store_name =req.body.store_id;
      res.send(store_id,store_name );
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
  getStoreById: async function (req, res) {
    try {
        const store_id = req.body.store_id;
        const store_name =req.body.store_id;
      res.send(store_id,store_name );
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
  updateStore: async function (req, res) {
    try {
        const store_id = req.body.store_id;
        const store_name =req.body.store_id;
      res.send(store_id,store_name );
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
  deleteStore: async function (req, res) {
    try {
        const store_id = req.body.store_id;
        const store_name =req.body.store_id;
      res.send(store_id,store_name );
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
};
