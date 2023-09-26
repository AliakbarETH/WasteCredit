module.exports = {
  getStore: async function (req, res) {
    try {
      const store_id = req.body.store_id;
      res.send(store_id);
    } catch (error) {
      const response = { Status: "Failure", Details: error.message };
      return res.status(400).send(response);
    }
  },
  setStore: async function (req, res) {
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
