//index file of model
const sequelize = require("../bin/dbConnection");
const { User } = require("../model/entities/User");

const db = {};

const models = {
  User,
};
sequelize.model = models;
db.sequelize = sequelize;
module.exports = { db, models };
