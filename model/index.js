//index file of model
const sequelize = require("../bin/dbConnection");
const { User } = require("../model/entities/User");
const { OTP } = require("./entities/OTP");
const { Store } = require("./entities/Store");
const db = {};

const models = {
  User,
  OTP,
  Store
};
sequelize.model = models;
db.sequelize = sequelize;
module.exports = { db, models };
