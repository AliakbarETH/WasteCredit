const joi = require("joi");
const storeRegisterSchema = joi.object().keys({
  name: joi.string().required().error(new Error("Invalid name")),
  email: joi.string().email().required().error(new Error("Invalid email")),
  address: joi.string().required().error(new Error("Enter address")),
  country: joi.string().required().error(new Error("Enter Country")),
  latitude: joi.string().required().error(new Error("Enter latitude.")),
  longitude: joi.string().required().error(new Error("Enter  longitude")),
});
module.exports = { storeRegisterSchema };
