const { models } = require("./index");
module.exports = {
  findUserByEmail: async function (email) {
    return await models.Store.findOne({
      where: {
        email,
      },
    });
  },
  createStore: async function (body) {
    return await models.Store.create({ ...body });
  },
  getUserById: async function (id) {
    return await models.User.findByPk(id);
  },
  updateUser: async function (id, body) {
    return await models.User.update(
      { ...body },
      {
        where: {
          id,
        },
      }
    );
  },
};
