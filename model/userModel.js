const { models } = require("./index");
module.exports = {
  findUserByEmail: async function (email) {
    return await models.User.findOne({
      where: {
        email,
      },
    });
  },
  createUser: async function (body, hashedPassword) {
    return await models.User.create({ ...body, password: hashedPassword });
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
