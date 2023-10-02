const { response } = require("express");
const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
module.exports = {
  createUser: async function (body) {
    try {
      const existingUser = await userModel.findUserByEmail(body.email);
      if (existingUser) {
        return { error: "User already exists" };
      }
      const saltRounds = 10;
      const plaintextPassword = body.password;
      bcrypt.hash(
        plaintextPassword,
        saltRounds,
        async function (err, hashedPassword) {
          if (err) {
            return { error: "Re-Type Password" };
          } else {
            const response = await userModel.createUser(body, hashedPassword);
            console.log(response);
          }
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  login: async function (body) {
    try {
      const existingUser = await userModel.findUserByEmail(body.email);
      console.log(existingUser);
      if (existingUser) {
        const plaintextPassword = body.password;

        const hashedPasswordFromDatabase = existingUser.dataValues.password;

        const result = await bcrypt.compare(
          plaintextPassword,
          hashedPasswordFromDatabase
        );

        if (result) {
          return existingUser;
        } else {
          return "Password incorrect";
        }
      } else {
        return "Signup first";
      }
    } catch (error) {
      console.log(error);
    }
  },
};
