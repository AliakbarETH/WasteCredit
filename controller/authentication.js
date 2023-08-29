const Joi = require("joi");

//Input Validation scheme using joi
const scheme = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

//User Login
const userLogin = async (req, res) => {
  try {
    const validateUser = await scheme.validateAsync(req.query);

    if (validateUser.error) {
      res.send("BAD REQUEST! ERROR 401" + error);
    }
    res.send("Login Successful.");
  } catch (error) {
    res.send("BAD REQUEST! ERROR 400" + error);
  }
};
//User SignUp

const userSignup = async (req, res) => {
  try {
    
  } catch (error) {}
  res.send("SignUp successful.");
};

//Export

module.exports = {
  userLogin,
  userSignup,
};
