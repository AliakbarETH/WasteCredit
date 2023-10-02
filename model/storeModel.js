const { Store } = require("./entities/Store");
const { models } = require("./index");
module.exports = {
  getAllStores: async function () {
    return await models.Store.findAll();
  },
  findStoreByEmail: async function (email) {
    return await models.Store.findOne({
      where: {
        email,
      },
    });
  },
  createStore: async function (body) {
    return await models.Store.create({ ...body });
  },
  getStoreById: async function (id) {
    return await models.Store.findByPk(id);
  },
  updateStore: async function (id, body) {
    return await models.Store.update(
      { ...body },
      {
        where: {
          id,
        },
      }
    );
  },
  deleteStore: async function (id) {
    return await models.Store.destroy({
      where: {
        id,
      },
    });
  },
};
