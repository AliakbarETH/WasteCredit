//index file of model
const sequelize = require("../bin/dbConnection");
const { User } = require("../model/entities/User");
const { OTP } = require("./entities/OTP");
const db = {};

const models = {
  User,
  OTP,
};
sequelize.model = models;
db.sequelize = sequelize;
module.exports = { db, models };
